import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { FaUsers } from 'react-icons/fa';

class ViewEnrollments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enrollments: [],
            isLoading: false
        }

        this.fetchData = this.fetchData.bind(this);
    }

    async fetchData() {
        let response = await fetch("/api/enrollment");
        let body = await response.json();
        this.setState({enrollments: body});
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return(
            <div>
            <Typography component="h1" variant="h5">
             Enrollment Summary <FaUsers className="mr-1" />
            </Typography>
              <TableContainer
                style={{ width: "80%", margin: "0 10px" }}
                component={Paper}
              >
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Enrollment ID</TableCell>
                      <TableCell align="center">Student ID</TableCell>
                      <TableCell align="center">Course ID</TableCell>
                      <TableCell align="center">Department Code</TableCell>
                      <TableCell align="center">Course Number</TableCell>
                      <TableCell align="center">Date Enrolled</TableCell>
                      <TableCell align="center">Course Cost</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.enrollments.map((row) => 
                      <TableRow key={row.e_id}>
                        <TableCell align="center">{row.e_id}</TableCell>
                        <TableCell align="center">{row.s_id}</TableCell>
                        <TableCell align="center">{row.c_id}</TableCell>
                        <TableCell align="center">{row.deptCode}</TableCell>
                        <TableCell align="center">{row.courseNum}</TableCell>
                        <TableCell align="center">{row.date}</TableCell>
                        <TableCell align="center">${row.cost}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
          </div> 
        );
    }
}
  
export default ViewEnrollments;