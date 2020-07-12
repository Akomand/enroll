// import React, {Component, useState, useEffect} from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App () {
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         fetch('/api/student')
//             .then(response => response.text())
//             .then(message => {
//                 setMessage(message);
//             });
//     },[])
//     return (
//         <div className="App">
//             <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo"/>
//             <h1 className="App-title">{message}</h1>
//             </header>
//             <p className="App-intro">
//                 To get started, edit <code>src/App.js</code> and save to reload.
//             </p>
//         </div>
//     )
// }

// export default App;
import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AddStudent from "./Components/AddStudent";
import ViewStudents from "./Components/ViewStudents";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import AddCourse from './Components/AddCourse';
import ViewCourses from './Components/ViewCourses';
import ViewEnrollments from "./Components/ViewEnrollments";
import Enroll from "./Components/Enroll";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }

  render() {
    return (
      <Router>
        <Navigation/>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/addStudent" component={AddStudent} />
        <Route exact path="/viewStudents" component={ViewStudents} />
        <Route exact path="/addCourse" component={AddCourse} />
        <Route exact path="/viewCourses" component={ViewCourses} />
        <Route exact path="/addEnrollment" component={Enroll} />
        <Route exact path="/viewEnrollments" component={ViewEnrollments} />
      </Router>
    );
  }
}

export default App;