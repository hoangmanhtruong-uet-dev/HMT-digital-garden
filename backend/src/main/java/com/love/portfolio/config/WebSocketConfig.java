package com.love.portfolio.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    private final WebSocketAuthInterceptor authInterceptor;

    private final String[] allowedOrigins;

    public WebSocketConfig(WebSocketAuthInterceptor authInterceptor,
                           @Value("${allowed.origins:*}") String allowedOriginsRaw) {
        this.authInterceptor = authInterceptor;
        this.allowedOrigins = java.util.Arrays.stream(allowedOriginsRaw.split(","))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .toArray(String[]::new);
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // Prefix cho client SUBSCRIBE (nhận tin)
        config.enableSimpleBroker("/topic");
        // Prefix cho client SEND (gửi tin lên server)
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // Endpoint kết nối WebSocket, fallback SockJS cho browser cũ.
        // Origin bị giới hạn bởi biến môi trường ALLOWED_ORIGINS (mặc định "*" chỉ cho dev).
        registry.addEndpoint("/ws-location")
                .setAllowedOriginPatterns(allowedOrigins)
                .withSockJS();
    }

    @Override
    public void configureClientInboundChannel(org.springframework.messaging.simp.config.ChannelRegistration registration) {
        registration.interceptors(authInterceptor);
    }
}
