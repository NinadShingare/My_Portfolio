package com.portfolio.backend.controller;

import com.portfolio.backend.model.Messages;
import com.portfolio.backend.model.Project;
import com.portfolio.backend.model.Skills;
import com.portfolio.backend.repository.MessagesRepository;
import com.portfolio.backend.repository.ProjectRepository;
import com.portfolio.backend.repository.SkillsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")// can use @CrossOrigin(origins = "http://localhost:3000/") for dev
public class PortfolioController {

    private final ProjectRepository projectRepo;
    private final MessagesRepository messageRepo;
    private final SkillsRepository skillsRepo;

    @Autowired
    public PortfolioController(ProjectRepository projectRepo, MessagesRepository messageRepo, SkillsRepository skillsRepo) {
        this.projectRepo = projectRepo;
        this.messageRepo = messageRepo;
        this.skillsRepo = skillsRepo;
    }
//mapping for projects
    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectRepo.findAll();
    }

    @PostMapping("/projects")
    public Project addProject(@RequestBody Project project) {
        return projectRepo.save(project);
    }
    //mapping for contact
    @PostMapping("/contact")
    public Messages addMessage(@RequestBody Messages messages) {
        return messageRepo.save(messages);
    }
    //mapping for skills
    @GetMapping("/skills")
    public List<Skills> getSkills() {
        return skillsRepo.findAll();
    }

    @PostMapping("/skills")
    public Skills addSkills(@RequestBody Skills skills) {
        return skillsRepo.save(skills);
    }
}

