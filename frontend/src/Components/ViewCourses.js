import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { FaUsers } from 'react-icons/fa';
import { Form, Col } from 'react-bootstrap';
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

class ViewCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            isLoading: false,
            validated: false,
            deptCode: "",
            ID: "",
            searchBy: "Department"
        }

        this.handleDeptCodeChange = this.handleDeptCodeChange.bind(this);
        this.handleIDChange = this.handleIDChange.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.fetchAll = this.fetchAll.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleDeptCodeChange(e) {
      this.setState({deptCode: e.target.value})
    }

    handleIDChange(e) {
      this.setState({ID: e.target.value})
    }

    handleSearchChange(e) {
      this.setState({searchBy: e.target.value})
    }

    async componentDidMount() {
      let response = await fetch("/api/course");
      let body = await response.json();
      this.setState({courses: body});
    }

    async fetchAll() {
      let response = await fetch("/api/course");
      let body = await response.json();
      this.setState({courses: body});
    }
    

    async fetchData(e) {
      const form = e.currentTarget;
      e.preventDefault();
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        else {
          let response;
          this.setState({isLoading: true});
          if(this.state.searchBy === "StudentID") {
            response = await fetch("/api/course/student/" + this.state.ID);
          }
          else {
            response = await fetch("/api/course/" + this.state.deptCode);
          }
          let body = await response.json();
          this.setState({courses: body, isLoading: false});
        }
        this.setState({validated: true});
    }


    render() {
        return(
            <div> 
              <Col md={{ span: 6, offset: 3 }}>
            <Form noValidate validated={this.state.validated} onSubmit={this.fetchData}>
            <Form.Group controlId="validationCustom01">
              <Form.Label className="mr-sm-2">Search By:</Form.Label>
              <select value={this.state.searchBy} onChange={this.handleSearchChange}>
                <option value="Department">Department</option>
                <option value="StudentID">Student ID</option>
              </select>
              {this.state.searchBy === "Department" ? (
              <React.Fragment>
              <Form.Control type="text" value={this.state.deptCode} onChange={this.handleDeptCodeChange} placeholder="Department" className="mr-sm-2" required/>
              <Form.Control.Feedback type="invalid">
                        Please type in a Dept Code!
              </Form.Control.Feedback>
              </React.Fragment>) : 
              (<React.Fragment>
              <Form.Control type="number" value={this.state.ID} onChange={this.handleIDChange} placeholder="Student ID" className="mr-sm-2" required/>
              <Form.Control.Feedback type="invalid">
                        Please type in a StudentID!
              </Form.Control.Feedback>
              </React.Fragment>)}
            </Form.Group>
            <Button type="submit" style={{color: "white", backgroundColor: "black"}}>Search</Button>
            </Form>
            </Col>

            
            <Typography component="h1" variant="h5">
             Course Catalog <FaUsers className="mr-1" /> <Button type="submit" style={{marginTop: "7pt", color: "white", backgroundColor: "black"}} onClick={this.fetchAll}>View All</Button>
            </Typography>

            {this.state.isLoading ? (
        <CircularProgress value={25}/>
      ) : (
              <TableContainer
                style={{ width: "80%", margin: "0 10px" }}
              >
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">ID</TableCell>
                      <TableCell align="center">Department Code</TableCell>
                      <TableCell align="center">Course Number</TableCell>
                      <TableCell align="center">Title</TableCell>
                      <TableCell align="center">Credits</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.courses.map((row) => 
                      <TableRow key={row.id}>
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.deptCode}</TableCell>
                        <TableCell align="center">{row.courseNum}</TableCell>
                        <TableCell align="center">{row.title}</TableCell>
                        <TableCell align="center">{row.credits}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
      )}
          </div> 
        );
    }
}




export default ViewCourses;