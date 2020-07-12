package com.springboot.enroll.model;

//import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "COURSE")
public class Course {
	
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(name="C_ID")
private Integer id;

@Column(name="DEPT_CODE")
 private String deptCode;

@Column(name="COURSE_NUM")
 private Integer courseNum;

@Column(name="TITLE")
 private String title;

@Column(name="CREDITS")
private Integer credits;



@Override
 public String toString() {
  return "Student [deptCode= " + deptCode + ", courseNum=" + courseNum + ", title=" + title + ", credits=" + credits + "]";
 }

public Course() {
	this.id = 0;
	this.deptCode = "";
	this.courseNum = 0;
	this.title = "";
	this.credits = 0;
}

public Course(Integer id, String deptCode, Integer courseNum, String title, Integer credits) {
	this.id = id;
	this.deptCode = deptCode;
	this.courseNum = courseNum;
	this.title = title;
	this.credits = credits;
}

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

public String getDeptCode() {
  return deptCode;
 }

public void setDeptCode(String deptCode) {
  this.deptCode = deptCode;
 }

public Integer getCourseNum() {
  return courseNum;
 }

public void setCourseNum(Integer courseNum) {
  this.courseNum = courseNum;
 }

public String getTitle() {
	return title;
}

public void setTitle(String title) {
	this.title = title;
}

public Integer getCredits() {
	return credits;
}

public void setCredits(Integer credits) {
	this.credits = credits;
}

}