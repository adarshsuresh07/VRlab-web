import React from "react";
import Profile from "../Dashboard/Profile";
import Scores from "../Dashboard/Scores";
import { Accordion, Card, Button } from "react-bootstrap";
import Assigned from "../Studentdash/Assigned";
import Finished from "../Studentdash/Finished";
class StudentDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assigned: true,
    };
  }

  handleAssigned = () => {
    this.setState({ assigned: true });
  };
  handleFinished = () => {
    this.setState({ assigned: false });
  };

  render() {
    return (
      <div className="overlay">
        <main>
          <div className="row">
            <div className="sidebar">
              <Profile />
            </div>
            <div className="student-right">
              {/* <div className="stduent-nav">
                <button className="assigned" onClick={this.handleAssigned}>
                  Assigned
                </button>
                <button className="finished" onClick={this.handleFinished}>
                  Finished
                </button>
              </div>
              <hr /> */}
              {this.state.assigned ? <Assigned /> : <Finished />}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default StudentDash;
