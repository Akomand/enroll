import React from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

class Navigation extends React.Component {
    render() {  
      return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">EnrollDB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Students" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/addStudent">Add Student</NavDropdown.Item>
                    <NavDropdown.Item href="viewStudents">View Students</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Courses" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/addCourse">Add Course</NavDropdown.Item>
                    <NavDropdown.Item href="/viewCourses">View Courses</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Enrollments" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/addEnrollment">Enroll</NavDropdown.Item>
                    <NavDropdown.Item href="/viewEnrollments">View Enrollments</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Navbar.Brand inline href="#home">Created by Aneesh Komanduri</Navbar.Brand>
            </Navbar.Collapse>
        </Navbar>
      );
    }
  }
  
  export default Navigation;