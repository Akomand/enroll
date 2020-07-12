import React from 'react';

class Home extends React.Component {
    render() {
        const biggerLead = {
            fontSize: 1.4 + 'em',
            fontWeight: 200
          };
        return (
            <body>
              <div className="container text-center">
                <div className="row justify-content-center">
                  <div className="col-10 col-md-10 col-lg-8 col-xl-7">
                  <div
                className="display-4 text-secondary mt-3 mb-2"
                style={{
                  fontSize: 2.8 + 'em'
                }}
              >
                EnrollDB
              </div>
                    <p className="lead" style={biggerLead}>
                      Welcome to EnrollDB! This is an application created for the purposes of
                      enrolling students into courses and displaying enrollment information. 
                      Some operations included in this application include: add a student to
                      database, add a course to database, enroll a student into a course, view 
                      students, view courses, and view all enrollments or filter by department
                      or student ID.
                    </p>
                  </div>
                </div>
              </div>
              </body>
          );
    }
}

export default Home;