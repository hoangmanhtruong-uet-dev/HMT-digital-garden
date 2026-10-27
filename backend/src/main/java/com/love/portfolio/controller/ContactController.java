package com.love.portfolio.controller;

import com.love.portfolio.model.ContactMessage;
import com.love.portfolio.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.love.portfolio.config.PublicEndpoint;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
@PublicEndpoint
public class ContactController {

    @Autowired
    private ContactMessageRepository repo;

    @PostMapping("/enroll")
    public ResponseEntity<?> submitContact(@RequestBody ContactMessage message) {
        repo.save(message);
        return ResponseEntity.ok().body("{\"status\": \"success\"}");
    }
}
