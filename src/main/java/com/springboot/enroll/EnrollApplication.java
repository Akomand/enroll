package com.springboot.enroll;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages= {"com.springboot.enroll.controller", 
		  "com.springboot.enroll.service",
		  "com.springboot.enroll.dao",
		  "com.springboot.enroll.model"})
public class EnrollApplication {

	public static void main(String[] args) {
		SpringApplication.run(EnrollApplication.class, args);
	}

}

