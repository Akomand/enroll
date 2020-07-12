package com.springboot.enroll.dao;

import java.util.ArrayList;
import java.sql.Date;
import java.math.BigDecimal;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.LockModeType;
import javax.persistence.Persistence;

//import org.hibernate.query.Query;
import javax.persistence.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.springboot.enroll.model.Student;
import com.springboot.enroll.model.Course;
import com.springboot.enroll.model.Enrollment;

@Repository
public class RegistrationDAOImp implements RegistrationDAO {

@Autowired
 private EntityManager entityManager;


// GET ALL RECORDS
@Override
 public List<Student> get() {
  Query query = entityManager.createNativeQuery("SELECT * FROM STUDENT s");
  List<Object[]> resultList = query.getResultList();
  List<Student> values = new ArrayList<>(resultList.size());
  for (Object[] row : resultList) {
      values.add(new Student((Integer)row[0],(String)row[1],(String)row[2]));
  }
  return values;
}

// GET RECORD BY ID
@Override
 public Student get(Integer id) {
  Query query = entityManager.createNativeQuery("SELECT * FROM STUDENT s WHERE s.S_ID="+id);
  Session currSession = entityManager.unwrap(Session.class);
  Student student = currSession.get(Student.class, id);
  return student;
 }

// SAVE RECORD
@Override
 public void save(Student student) {
	entityManager.createNativeQuery("INSERT INTO STUDENT (S_ID, S_NAME, S_MAJOR) VALUES (?,?,?)")
    .setParameter(1, student.getId())
    .setParameter(2, student.getName())
    .setParameter(3, student.getMajor())
    .executeUpdate();
}

// DELETE RECORD
@Override
 public void delete(Integer id) {
  Session currSession = entityManager.unwrap(Session.class);
  Student student = currSession.get(Student.class, id);
  currSession.delete(student);
}




// COURSES
//GET ALL RECORDS
@Override
public List<Course> getCourses() {
Query query = entityManager.createNativeQuery("SELECT * FROM COURSE c");
List<Object[]> resultList = query.getResultList();
List<Course> values = new ArrayList<>(resultList.size());
for (Object[] row : resultList) {
    values.add(new Course((Integer)row[0],(String)row[1],(Integer)row[2],(String)row[3],(Integer)row[4]));
}
return values;
}

//GET RECORD BY ID
@Override
public List <Course> getCourseByDept(String dept) {
	Query query = entityManager.createNativeQuery("SELECT * FROM COURSE c WHERE c.DEPT_CODE="+ "\"" + dept + "\"");
	List<Object[]> resultList = query.getResultList();
	List<Course> values = new ArrayList<>(resultList.size());
	for (Object[] row : resultList) {
	    values.add(new Course((Integer)row[0],(String)row[1],(Integer)row[2],(String)row[3],(Integer)row[4]));
	}
	return values;
}


@Override
public List <Course> getCourseByStudentID(Integer s_id) {
	Query query = entityManager.createNativeQuery("SELECT c.C_ID as id, c.DEPT_CODE, c.COURSE_NUM, c.TITLE, c.CREDITS FROM COURSE c, ENROLLMENT e "
			+ "WHERE c.C_ID = e.C_ID AND e.STUDENT_ID=" + s_id);
	List<Object[]> resultList = query.getResultList();
	List<Course> values = new ArrayList<>(resultList.size());
	for (Object[] row : resultList) {
	    values.add(new Course((Integer)row[0],(String)row[1],(Integer)row[2],(String)row[3],(Integer)row[4]));
	}
	return values;
}

//SAVE RECORD
@Override
public void saveCourse(Course course) {
	entityManager.createNativeQuery("INSERT INTO COURSE(C_ID, DEPT_CODE, COURSE_NUM, TITLE, CREDITS) VALUES (?,?,?,?,?)")
 .setParameter(1, course.getId())
 .setParameter(2, course.getDeptCode())
 .setParameter(3, course.getCourseNum())
 .setParameter(4, course.getTitle())
 .setParameter(5, course.getCredits())
 .executeUpdate();
}






// ENROLLMENTS
//GET ALL RECORDS
@Override
public List<Enrollment> getEnrollments() {
Query query = entityManager.createNativeQuery("SELECT * FROM ENROLLMENT e");
List<Object[]> resultList = query.getResultList();
List<Enrollment> values = new ArrayList<>(resultList.size());
for (Object[] row : resultList) {
 values.add(new Enrollment((Integer)row[0],(Integer)row[1],(Integer)row[2],(String)row[3],(Integer)row[4], (Date)row[5], (BigDecimal)row[6]));
}
return values;
}

//GET RECORD BY ID
@Override
public Enrollment getEnrollment(Integer e_id) {
Query query = entityManager.createNativeQuery("SELECT * FROM ENROLLMENT e WHERE e.ENROLLMENT_ID="+e_id);
Session currSession = entityManager.unwrap(Session.class);
Enrollment enroll = currSession.get(Enrollment.class, e_id);
return enroll;
}

//SAVE RECORD
@Override
public void saveEnrollment(Enrollment enroll) {
	entityManager
	.createNativeQuery("INSERT INTO ENROLLMENT(ENROLLMENT_ID, STUDENT_ID, C_ID, DEPT_CODE, "
			+ "COURSE_NUM, DATE_ENROLLED, COURSE_COST) VALUES (?,?,?,?,?,?,?)")
	.setParameter(1, enroll.getE_id())
	.setParameter(2, enroll.getS_id())
	.setParameter(3, enroll.getC_id())
	.setParameter(4, enroll.getDeptCode())
	.setParameter(5, enroll.getCourseNum())
	.setParameter(6, enroll.getDate())
	.setParameter(7, enroll.getCost())
	.executeUpdate();
}


}