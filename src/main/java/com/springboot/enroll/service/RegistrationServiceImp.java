package com.springboot.enroll.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.enroll.dao.RegistrationDAO;
import com.springboot.enroll.model.Student;
import com.springboot.enroll.model.Course;
import com.springboot.enroll.model.Enrollment;

@Service
public class RegistrationServiceImp implements RegistrationService {
 
 @Autowired
 private RegistrationDAO registerDao;
 
@Transactional
 @Override
 public List<Student> get() {
  return registerDao.get();
 }

@Transactional
 @Override
 public Student get(Integer id) {
  return registerDao.get(id);
 }

@Transactional
 @Override
 public void save(Student student) {
  registerDao.save(student);
  
 }

@Transactional
 @Override
 public void delete(Integer id) {
  registerDao.delete(id);
 }




@Transactional
@Override
public List<Course> getCourses() {
 return registerDao.getCourses();
}

@Transactional
@Override
public List <Course> getCourseByDept(String dept) {
 return registerDao.getCourseByDept(dept);
}


@Transactional
@Override
public List <Course> getCourseByStudentID(Integer s_id) {
	return registerDao.getCourseByStudentID(s_id);
}

@Transactional
@Override
public void saveCourse(Course course) {
 registerDao.saveCourse(course);
 
}





@Transactional
@Override
public List<Enrollment> getEnrollments() {
 return registerDao.getEnrollments();
}

@Transactional
@Override
public Enrollment getEnrollment(Integer e_id) {
 return registerDao.getEnrollment(e_id);
}

@Transactional
@Override
public void saveEnrollment(Enrollment enroll) {
 registerDao.saveEnrollment(enroll);
 
}

}
