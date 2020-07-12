import React from 'react';
import Button from "@material-ui/core/Button";
import { Form, Col } from 'react-bootstrap';

const TUITION = 564.00;     // CONSTANT RATE OF TUITION FOR COST
let date = new Date();      // DATE OBJECT FOR DATE ENROLLED

class Enroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          e_id: 0,
          s_id: "",
          c_id: 0,
          deptCode: "",
          courseNum: "",
          date: "",
          cost: 0,
          message: "",
          validated: false,
          courses: [],
          students: []
        }

        // BIND HELPER FUNCTIONS
        this.handleStudentIDChange = this.handleStudentIDChange.bind(this);
        this.handleDeptCodeChange = this.handleDeptCodeChange.bind(this);
        this.handleCourseNumChange = this.handleCourseNumChange.bind(this);

        this.saveData = this.saveData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // SET STATE OF ID
    handleStudentIDChange(e) {
        this.setState({s_id: e.target.value});
    }

    // SET STATE OF DEPTCODE
    handleDeptCodeChange(e) {
        this.setState({deptCode: e.target.value});
    }

    // SET STATE OF COURSE NUM
    handleCourseNumChange(e) {
        this.setState({courseNum: e.target.value});
    }

    // INITIAL LOAD OF COMPONENT
    async componentDidMount() {
        let response = await fetch("/api/course");
        let body = await response.json();
        this.setState({courses: body})

        let studentRes = await fetch("/api/student");
        let body2 = await studentRes.json();
        this.setState({students: body2})
    }

    // POST DATA TO API
    async saveData(data) {
        const response = await fetch("/api/enrollment", {
            method: "POST", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
              "Content-Type": "application/json"
            },
            redirect: "follow", 
            referrerPolicy: "no-referrer", 
            body: JSON.stringify(data)
          });
          let body = await response.json();
          this.setState({message: body ? "Data sucessfully updated!" : "Failed to add data!"})
    }

    // HANDLE SUBMIT FROM FORM
    handleSubmit(e) {
        const form = e.currentTarget;
        e.preventDefault();
        let validDept = false;
        let validStudent = false;
        let duplicate = false;

        let courseID = 0;
        let credits = 0;
        for(let i = 0; i < this.state.courses.length; i++) {
            if(this.state.courses[i].deptCode === this.state.deptCode.toUpperCase()) {
                validDept = true;
                courseID = this.state.courses[i].id;
                credits = this.state.courses[i].credits;
            }
        }

        for(let i = 0; i < this.state.students.length; i++) {
            if(this.state.students[i].id == this.state.s_id)
                validStudent = true;
        }

        if (form.checkValidity() === false || validDept === false || validStudent === false) {
            e.stopPropagation();
        }
        else {
            const data = { 
                e_id: this.state.e_id,
                s_id: this.state.s_id,
                c_id: courseID,
                deptCode: this.state.deptCode.toUpperCase(),  
                courseNum: this.state.courseNum,
                date: new Date(date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()),
                cost: credits * TUITION
            };
            this.saveData(data);
            this.setState({
                s_id: "",
                c_id: "",
                deptCode: "",  
                courseNum: "",
                date: "",
                cost: ""
            })
        }
        this.setState({validated: true})
    }
    
    

    render() {
        return(
            <Col md={{ span: 6, offset: 3 }}>
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Group controlId="validationCustom01">
    <Form.Label>Student ID</Form.Label>
    <Form.Control type="number" value={this.state.s_id} onChange={this.handleStudentIDChange} placeholder="ID" required/>
    <Form.Control.Feedback type="invalid">
              Please type in a Student ID!
            </Form.Control.Feedback>
  </Form.Group>


  <Form.Group controlId="validationCustom02">
    <Form.Label>Department Code</Form.Label>
    <Form.Control type="text" value={this.state.deptCode} onChange={this.handleDeptCodeChange} placeholder="Department" required/>
    <Form.Control.Feedback type="invalid">
              Please type in a Dept Code!
            </Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="validationCustom03">
    <Form.Label>Course Number</Form.Label>
    <Form.Control type="number" value={this.state.courseNum} onChange={this.handleCourseNumChange} placeholder="Course Number" required/>
    <Form.Control.Feedback type="invalid">
              Please type in a Course Number!
            </Form.Control.Feedback>
  </Form.Group>

  <Button type="submit" style={{color: "white", backgroundColor: "black"}}>Submit</Button>
  <Form.Group controlId="formBasicPassword">
      <Form.Text>
      {this.state.message}
      </Form.Text>
  </Form.Group>
</Form>
</Col>
        );
    }
}


  export default Enroll;