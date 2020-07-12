package com.springboot.enroll.service;

import java.util.List;

import com.springboot.enroll.model.Student;
import com.springboot.enroll.model.Course;
import com.springboot.enroll.model.Enrollment;

public interface RegistrationService {
	
	// Students
	List<Student> get(); 
	Student get(Integer id);
	void save(Student student);
	void delete(Integer id);
 
	 // Courses
	 List <Course> getCourses();
	 List <Course> getCourseByDept(String dept);
	 List <Course> getCourseByStudentID(Integer s_id);
	 void saveCourse(Course course);
	 
	 // Enrollment
	 List <Enrollment> getEnrollments();
	 Enrollment getEnrollment(Integer e_id);
	 void saveEnrollment(Enrollment enroll);
}