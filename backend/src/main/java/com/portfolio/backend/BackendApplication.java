package com.portfolio.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {

		System.out.println("Connecting to DB: " + System.getenv("SPRING_DATASOURCE_URL"));

		SpringApplication.run(BackendApplication.class, args);
	}

}
