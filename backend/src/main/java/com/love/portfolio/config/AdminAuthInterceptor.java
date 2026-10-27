package com.love.portfolio.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class AdminAuthInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) return true;
        boolean isPublic = false;
        if (handler instanceof org.springframework.web.method.HandlerMethod) {
            org.springframework.web.method.HandlerMethod handlerMethod = (org.springframework.web.method.HandlerMethod) handler;
            PublicEndpoint annotation = handlerMethod.getMethodAnnotation(PublicEndpoint.class);
            if (annotation == null) {
                annotation = handlerMethod.getBeanType().getAnnotation(PublicEndpoint.class);
            }
            isPublic = annotation != null;
        }

        var session = request.getSession(false);
        boolean authenticated = session != null && Boolean.TRUE.equals(session.getAttribute("adminAuthenticated"));
        if (isPublic || authenticated) return true;
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.getWriter().write("{\"message\":\"Bạn cần đăng nhập quản trị.\"}");
        return false;
    }
}
