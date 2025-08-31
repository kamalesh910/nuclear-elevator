package com.nuclear.elevator.service;

import com.nuclear.elevator.model.ContactInquiry;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {
    private final JavaMailSender mailSender;
    
    @Value("${app.mail.to}")
    private String toEmail;
    
    @Value("${app.mail.from}")
    private String fromEmail;

    public MailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactInquiry(ContactInquiry inquiry) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setFrom(fromEmail);
        message.setSubject("New Contact Inquiry - Nuclear Elevators");
        message.setText(String.format(
            "New contact inquiry received:\n\n" +
            "Name: %s\n" +
            "Email: %s\n" +
            "Phone: %s\n" +
            "Message: %s",
            inquiry.getName(), inquiry.getEmail(), inquiry.getPhone(), inquiry.getMessage()
        ));
        
        mailSender.send(message);
    }
}