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

class ViewStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            isLoading: false
        }

        this.fetchData = this.fetchData.bind(this);
    }

    async fetchData() {
        let response = await fetch("/api/student");
        let body = await response.json();
        this.setState({students: body});
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return(
            <div>
            <Typography component="h1" variant="h5">
             Student Directory <FaUsers className="mr-1" />
            </Typography>
              <TableContainer
                style={{ width: "80%", margin: "0 10px" }}
                component={Paper}
              >
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">ID</TableCell>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Major</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.students.map((row) => 
                      <TableRow key={row.id}>
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.major}</TableCell>
                      </TableRow>
                      
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
          </div> 
        );
    }
}

export default ViewStudents;