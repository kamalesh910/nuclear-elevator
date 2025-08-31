package com.nuclear.elevator.controller;

import com.nuclear.elevator.model.ContactInquiry;
import com.nuclear.elevator.service.MailService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "${app.cors.allowed-origins}")
public class ContactController {
    private final MailService mailService;

    public ContactController(MailService mailService) {
        this.mailService = mailService;
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContact(@Valid @RequestBody ContactInquiry inquiry) {
        try {
            mailService.sendContactInquiry(inquiry);
            return ResponseEntity.ok(Map.of("message", "Contact inquiry sent successfully"));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                .body(Map.of("error", "Failed to send inquiry: " + e.getMessage()));
        }
    }
}