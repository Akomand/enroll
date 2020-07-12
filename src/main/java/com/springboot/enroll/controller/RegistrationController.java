package com.springboot.enroll.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.enroll.model.Student;
import com.springboot.enroll.model.Course;
import com.springboot.enroll.model.Enrollment;
import com.springboot.enroll.service.RegistrationService;

@RestController
@RequestMapping("/api")
public class RegistrationController {
 
    
 @Autowired
 private RegistrationService registerService;
 
 @GetMapping("/student")
 public List<Student> get() {
  return registerService.get();
 }
 
 
 @PostMapping("/student")
 public Student save(@RequestBody Student student) {
  registerService.save(student);
  return student;
 }
 
 @GetMapping("/student/{id}")
 public Student get(@PathVariable int id) {
  return registerService.get(id);
 }

 
 @DeleteMapping("/student/{id}")
 public String delete(@PathVariable int id) {
  
  registerService.delete(id);
  
  return "Student removed with id "+id;
  
 }
 
 @PutMapping("/student")
 public Student update(@RequestBody Student student) {
  registerService.save(student);
  return student;
 }
 
 
 
 
 
 
 @GetMapping("/course")
 public List<Course> getCourses() {
  return registerService.getCourses();
 }
 
 
 @PostMapping("/course")
 public Course saveCourse(@RequestBody Course course) {
  registerService.saveCourse(course);
  return course;
 }
 
 @GetMapping("/course/{dept}")
 public List <Course> getCourseByDept(@PathVariable String dept) {
  return registerService.getCourseByDept(dept);
 }
 
 
 @GetMapping("/course/student/{s_id}")
 public List <Course> getCourseByStudentID(@PathVariable Integer s_id) {
	 return registerService.getCourseByStudentID(s_id);
 }
 

 @PutMapping("/course")
 public Course update(@RequestBody Course course) {
  registerService.saveCourse(course);
  return course;
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 @GetMapping("/enrollment")
 public List<Enrollment> getEnrollments() {
  return registerService.getEnrollments();
 }
 
 
 @PostMapping("/enrollment")
 public Enrollment saveEnrollment(@RequestBody Enrollment enroll) {
  registerService.saveEnrollment(enroll);
  return enroll;
 }
 
 @GetMapping("/enrollment/{id}")
 public Enrollment getEnrollment(@PathVariable int id) {
  return registerService.getEnrollment(id);
 }
 

 @PutMapping("/enrollment")
 public Enrollment update(@RequestBody Enrollment enroll) {
  registerService.saveEnrollment(enroll);
  return enroll;
 }
}
