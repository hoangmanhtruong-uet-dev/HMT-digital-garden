package com.love.portfolio.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

/**
 * Chặn kết nối WebSocket bất hợp pháp.
 *
 * Cơ chế: nếu cấu hình {@code ws.passcode} (env {@code WS_PASSCODE}) khác rỗng,
 * client bắt buộc truyền header {@code passcode} khớp mới được CONNECT.
 * Nếu để trống (mặc định) thì chỉ dựa vào giới hạn origin ở WebSocketConfig —
 * phù hợp với tính năng location công khai của Love Corner.
 *
 * Để bật: đặt WS_PASSCODE ở server và gửi cùng header đó từ frontend.
 */
@Component
public class WebSocketAuthInterceptor implements ChannelInterceptor {

    private final byte[] expectedPasscodeBytes;

    public WebSocketAuthInterceptor(@Value("${ws.passcode:${WS_PASSCODE:}}") String passcode) {
        this.expectedPasscodeBytes = (passcode == null) ? new byte[0] : passcode.getBytes(StandardCharsets.UTF_8);
    }

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);
        if (accessor != null && StompCommand.CONNECT.equals(accessor.getCommand()) && expectedPasscodeBytes.length > 0) {
            String passcode = accessor.getFirstNativeHeader("passcode");
            if (passcode == null
                    || !MessageDigest.isEqual(
                            expectedPasscodeBytes,
                            passcode.getBytes(StandardCharsets.UTF_8))) {
                throw new IllegalArgumentException("Unauthorized WebSocket Connection");
            }
        }
        return message;
    }
}
