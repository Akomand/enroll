package com.springboot.enroll.dao;

import java.util.List;

import org.hibernate.query.Query;

import com.springboot.enroll.model.Student;
import com.springboot.enroll.model.Course;
import com.springboot.enroll.model.Enrollment;

public interface RegistrationDAO {
 
 List<Student> get();
 
// Get record by id
Student get(Integer id);
 
// Save record
 void save(Student student);
 
 // Delete record
 void delete(Integer id);
 
 
 // Course
 List <Course> getCourses();
 List <Course> getCourseByDept(String dept);
 List <Course> getCourseByStudentID(Integer s_id);
 void saveCourse(Course course);
 
 
 
 //Enrollment
 List <Enrollment> getEnrollments();
 Enrollment getEnrollment(Integer e_id);
 void saveEnrollment(Enrollment enroll);
 
}