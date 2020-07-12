import React from 'react';
import Button from "@material-ui/core/Button";
import { Form, Col } from 'react-bootstrap';


class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          major: "",
          message: "",
          validated: false
        }

        // BIND HELPER FUNCTIONS
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMajorChange = this.handleMajorChange.bind(this);

        this.saveData = this.saveData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // SET STATE OF NAME
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    // SET STATE OF MAJOR
    handleMajorChange(e) {
        this.setState({major: e.target.value});
    }

    // POST DATA TO API
    async saveData(data) {
        const response = await fetch("/api/student", {
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
            e.stopPropagation();
        }
        else {
            const data = {  
                name: this.state.name.toUpperCase(),
                major: this.state.major.toUpperCase(),
            };
            this.saveData(data);
            this.setState({  
                name: "",
                major: "",
                validated: true
            })
        }
        this.setState({validated: true})
    }
    
    

    render() {
        return(
            <Col md={{ span: 6, offset: 3 }}>
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>

  <Form.Group controlId="validationCustom01">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Name" required/>
    <Form.Control.Feedback type="invalid">
              Please type in a name!
            </Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="validationCustom02">
    <Form.Label>Major</Form.Label>
    <Form.Control type="text" value={this.state.major} onChange={this.handleMajorChange} placeholder="Major" required/>
    <Form.Control.Feedback type="invalid">
              Please type in a major!
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


  export default AddStudent;