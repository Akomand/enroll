package com.springboot.enroll.model;

import java.math.BigDecimal;
import java.sql.Date;
import java.text.SimpleDateFormat;  
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "ENROLLMENT")
public class Enrollment {
	
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(name="ENROLLMENT_ID")
private Integer e_id;

@Column(name="STUDENT_ID")
private Integer s_id;

@Column(name="COURSE_ID")
private Integer c_id;

@Column(name="DEPT_CODE")
 private String deptCode;

@Column(name="COURSE_NUM")
 private Integer courseNum;

@Column(name="DATE_ENROLLED")
private Date date;

@Column(name="COURSE_COST")
private BigDecimal cost;

long millis=System.currentTimeMillis();  
public Enrollment() {
	this.e_id = 0;
	this.s_id = 0;
	this.c_id = 0;
	this.deptCode = "";
	this.courseNum = 0;
	this.date = new Date(millis);
	this.cost = new BigDecimal(0);
}

public Enrollment(Integer e_id, Integer s_id, Integer c_id, String deptCode, Integer courseNum, Date date, BigDecimal cost) {
	this.e_id = e_id;
	this.s_id = s_id;
	this.c_id = c_id;
	this.deptCode = deptCode;
	this.courseNum = courseNum;
	this.date = date;
	this.cost = cost;
}

public Integer getE_id() {
	return e_id;
}

public void setE_id(Integer e_id) {
	this.e_id = e_id;
}

public Integer getS_id() {
	return s_id;
}

public void setS_id(Integer s_id) {
	this.s_id = s_id;
}

public Integer getC_id() {
	return c_id;
}

public void setC_id(Integer c_id) {
	this.c_id = c_id;
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

public Date getDate() {
	return date;
}

public void setDate(Date date) {
	this.date = date;
}

public BigDecimal getCost() {
	return cost;
}

public void setCost(BigDecimal cost) {
	this.cost = cost;
}



}