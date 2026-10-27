package com.love.portfolio.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final AdminAuthInterceptor adminAuthInterceptor;
    private final String[] allowedOrigins;

    public WebConfig(AdminAuthInterceptor adminAuthInterceptor,
                     @org.springframework.beans.factory.annotation.Value("${allowed.origins:*}") String allowedOriginsRaw) {
        this.adminAuthInterceptor = adminAuthInterceptor;
        this.allowedOrigins = java.util.Arrays.stream(allowedOriginsRaw.split(","))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .toArray(String[]::new);
    }

    // Resource handler /uploads/** đã được xóa — ảnh giờ lưu trên Cloudinary,
    // truy cập trực tiếp qua URL https://res.cloudinary.com/...

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Origin bị giới hạn bởi biến môi trường ALLOWED_ORIGINS (mặc định "*" chỉ cho dev).
        // Ở production đặt ví dụ: ALLOWED_ORIGINS=https://example.com,https://www.example.com
        registry.addMapping("/api/**")
                .allowedOriginPatterns(allowedOrigins)
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .exposedHeaders("Access-Control-Allow-Origin");
        // WebSocket endpoint cần CORS riêng
        registry.addMapping("/ws-location/**")
                .allowedOriginPatterns(allowedOrigins)
                .allowedMethods("GET", "POST", "OPTIONS")
                .allowedHeaders("*");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(adminAuthInterceptor)
                .addPathPatterns(
                        "/api/classes/**",
                        "/api/settings/**",
                        "/api/exams/**",
                        "/api/goals/**",
                        "/api/milestones/**",
                        "/api/certificates/**");
    }
}
