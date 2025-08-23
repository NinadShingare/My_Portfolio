package com.portfolio.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Skills {
    @Id
    @GeneratedValue
    private Long id;
    private String skillname;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSkill() {
        return skillname;
    }

    public void setSkill(String skillname) {
        this.skillname = skillname;
    }
}


