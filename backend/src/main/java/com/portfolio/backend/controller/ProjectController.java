package com.portfolio.backend.controller;

import com.portfolio.backend.model.Project;
import com.portfolio.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:3000/")// can use @CrossOrigin(origins = "http://localhost:3000/") for dev
public class ProjectController {
    @Autowired
    private ProjectRepository repo;

    @GetMapping
    public List<Project> getProjects() {
        //System.out.println("get products change");
        return repo.findAll();
    }

    @PostMapping
    public Project addProject(@RequestBody Project project){
        return repo.save(project);
    }
}

