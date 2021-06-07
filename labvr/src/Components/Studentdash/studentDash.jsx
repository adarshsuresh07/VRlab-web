import React from "react";
import Profile from "../Dashboard/Profile";
import { getTokenu } from "../../utils/Token"
import axios from "axios"
import LoaderPage from "../Loader/Loader"
// import Scores from "../Dashboard/Scores";
// import { Accordion, Card, Button } from "react-bootstrap";
import Experiment from "./Experiment.jsx";
import "../Dashboard/dashboard.css"
class StudentDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assigned: true,
      details: null,
      loading: false,
      experiments: [],
      showsubmitted: true,
      showunsubmitted: true
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios.post("https://vrlabserver.herokuapp.com/api/student/" + getTokenu(), {},
      {
        headers: {
          'authorization': "token " + getTokenu()
        }
      })
      .then(res => {
        axios.post("https://vrlabserver.herokuapp.com/api/experiment/student/read/" + getTokenu(), {},
          {
            headers: {
              'authorization': "token " + getTokenu()
            }
          })
          .then(res => {
            this.setState({ experiments: res.data });
          })
          .catch(error => {
            console.log(error.response);
            if (error.response && error.response.data.msg)
              console.log(error.reponse.data);
          })
        this.setState({ details: res.data });
      })
      .catch(error => {
        console.log(error.response);
        if (error.response && error.response.data.msg)
          console.log(error.reponse.data);
      }).finally(() => {
        this.setState({ loading: false });
      })
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
        {this.state.loading ? <LoaderPage /> : <></>}
        <div className="sidebar">
          <Profile
            {...this.props}
            details={this.state.details}
            teacher={false}
            showSubmitted={() => this.setState({ showsubmitted: !this.state.showsubmitted })}
            showUnSubmitted={() => this.setState({ showunsubmitted: !this.state.showunsubmitted })}
            showsubmitted={this.state.showsubmitted}
            showunsubmitted={this.state.showunsubmitted}
          />
        </div>
        <div className="student-right">
          <Experiment experiments={this.state.experiments} showsubmitted={this.state.showsubmitted} showunsubmitted={this.state.showunsubmitted} />
        </div>
      </div>
    );
  }
}

export default StudentDash;
