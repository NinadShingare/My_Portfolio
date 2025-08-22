package com.portfolio.backend.controller;

import com.portfolio.backend.model.Messages;
import com.portfolio.backend.model.Project;
import com.portfolio.backend.repository.MessagesRepository;
import com.portfolio.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")// can use @CrossOrigin(origins = "http://localhost:3000/") for dev
public class PortfolioController {

    private final ProjectRepository projectRepo;
    private final MessagesRepository messageRepo;

    @Autowired
    public PortfolioController(ProjectRepository projectRepo, MessagesRepository messageRepo) {
        this.projectRepo = projectRepo;
        this.messageRepo = messageRepo;
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectRepo.findAll();
    }

    @PostMapping("/projects")
    public Project addProject(@RequestBody Project project) {
        return projectRepo.save(project);
    }

    @PostMapping("/contact")
    public Messages addMessage(@RequestBody Messages messages) {
        return messageRepo.save(messages);
    }
}

