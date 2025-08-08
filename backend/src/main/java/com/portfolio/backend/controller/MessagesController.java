package com.portfolio.backend.controller;

import com.portfolio.backend.model.Messages;
import com.portfolio.backend.repository.MessagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000/")
public class MessagesController {
    @Autowired
    private MessagesRepository MessRepo;

    @PostMapping
    public Messages addMessage(@RequestBody Messages messages){
        return MessRepo.save(messages);
    }
}
