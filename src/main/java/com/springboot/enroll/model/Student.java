package com.springboot.enroll.model;

//import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "STUDENT")
public class Student {
	
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(name="S_ID", unique = true, nullable = false, columnDefinition = "BINARY(16)")
 private Integer id;

@Column(name="S_NAME")
 private String name;

@Column(name="S_MAJOR")
 private String major;


@Override
 public String toString() {
  return "Student [id= " + id + ", name=" + name + ", major=" + major +  "]";
 }

public Student() {
	this.id = 0;
	this.name = "";
	this.major = "";
}

public Student(Integer id, String name, String major) {
	this.id = id;
	this.name = name;
	this.major = major;
}

public Integer getId() {
  return id;
 }

public void setId(Integer id) {
  this.id = id;
 }

public String getName() {
  return name;
 }

public void setName(String name) {
  this.name = name;
 }

public String getMajor() {
	return major;
}

public void setMajor(String major) {
	this.major = major;
}

}