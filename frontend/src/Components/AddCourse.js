import React from 'react';
import Button from "@material-ui/core/Button";
import { Form, Col } from 'react-bootstrap';


class AddCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          ID: "",
          deptCode: "",
          courseNum: "",
          title: "",
          credits: "",
          message: "",
          validated: false
        }

        // BIND HELPER FUNCTIONS
        this.handleDeptCodeChange = this.handleDeptCodeChange.bind(this);
        this.handleCourseNumChange = this.handleCourseNumChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCreditsChange = this.handleCreditsChange.bind(this);

        this.saveData = this.saveData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // SET STATE OF DEPTCODE
    handleDeptCodeChange(e) {
        this.setState({deptCode: e.target.value});
    }

    // SET STATE OF COURSE NUM
    handleCourseNumChange(e) {
        this.setState({courseNum: e.target.value});
    }

    // SET STATE OF TITLE
    handleTitleChange(e) {
        this.setState({title: e.target.value});
    }

    // SET STATE OF CREDITS
    handleCreditsChange(e) {
        this.setState({credits: e.target.value});
    }

    // CALL API TO POST DATA
    async saveData(data) {
        const response = await fetch("/api/course", {
            method: "POST", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
              "Content-Type": "application/json"
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          let body = await response.json();
          this.setState({message: body ? "Data sucessfully updated!" : "Failed to add data!"})
    }

    // HANDLE SUBMIT FROM FORM
    handleSubmit(e) {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            //e.preventDefault();
            e.stopPropagation();
        }
        else {
            const data = { 
                deptCode: this.state.deptCode.toUpperCase(),  
                courseNum: this.state.courseNum,
                title: this.state.title.toUpperCase(),
                credits: this.state.credits
            };
            this.saveData(data);
            this.setState({
                deptCode: "",  
                courseNum: "",
                title: "",
                credits: ""
            })
        }
        this.setState({validated: true})
    }
    
    

    render() {
        return(
            <Col md={{ span: 6, offset: 3 }}>
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
  <Form.Group controlId="validationCustom01">
    <Form.Label>Department Code</Form.Label>
    <Form.Control type="text" value={this.state.deptCode} onChange={this.handleDeptCodeChange} placeholder="Department" required/>
    <Form.Control.Feedback type="invalid">
              Please type in a Dept Code!
            </Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="validationCustom02">
    <Form.Label>Course Number</Form.Label>
    <Form.Control type="number" value={this.state.courseNum} onChange={this.handleCourseNumChange} placeholder="Course Number" required/>
    <Form.Control.Feedback type="invalid">
              Please type in a Course Number!
            </Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="validationCustom03">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title" required/>
    <Form.Control.Feedback type="invalid">
              Please type in a title!
    </Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="validationCustom02">
    <Form.Label>Credit Hours</Form.Label>
    <Form.Control type="number" value={this.state.credits} onChange={this.handleCreditsChange} placeholder="Credits" required/>
    <Form.Control.Feedback type="invalid">
              Please type in Credits!
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


  export default AddCourse;