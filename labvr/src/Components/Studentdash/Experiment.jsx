import React, { Component } from "react";
// import Collapsible from "react-collapsible";
import { Accordion, Card } from "react-bootstrap";

export default class Experiment extends Component {
  constructor(props) {
    super(props);
  }
  toStandard = (date) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var day = new Date(date);

    // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    return day.toLocaleDateString("en-US", options);
  }
  getResult = (data) => {
    data = JSON.parse(data);
    if (data.result)
      return data.result.map((item, key) => {
        var test = JSON.parse(item);
        return (
          <tr>
            <td>{test.load !== undefined ? test.load : test.weight}</td>
            <td>{test.ext ? test.ext : test.time}</td>
          </tr>)
      })
  }
  render() {
    console.log(this.props.experiments)
    if (this.props.experiments)
      return (
        <div className="">
          <Accordion>
            {this.props.experiments.temp?.map(experiment => {
              if ((this.props.showsubmitted && experiment.result.submitted) || (this.props.showunsubmitted && !experiment.result.submitted))
                return (
                  <Card key={experiment.result.key} style={{ marginBottom: "10px", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
                    <Accordion.Toggle as={Card.Header} eventKey={experiment.result.key}>
                      <div className="accordion-text">
                        <div>Experiment - {experiment.experiment?.type === "simple-pendulum" ? "Simple Pendulum" : "Hooke's Law"}<br />
                          <span style={{ fontSize: "12px" }}>{this.toStandard(experiment.experiment?.created_at)} </span>
                        </div>
                        <span style={{ color: experiment.result.submitted ? "#16253e" : "red", fontSize: "12px" }}>{experiment.result.submitted ? "Submitted" : "Not submitted"}</span>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={experiment.result.key}>
                      <Card.Body>
                        <div className="accordion-body">
                          <div className="accordion-data">
                            <span>Key: {experiment.result.key}</span>
                            <span>Under: {experiment.experiment?.created_by}</span>
                            <span>Max Score: 40</span>
                            <span>Your Score: 35</span>
                            <span>Start Time: {this.toStandard(experiment.result.created_at)}</span>
                            <span>End Time: {this.toStandard(experiment.result.updated_at)}</span>
                          </div>
                          {experiment.result.submitted && experiment.result.result && experiment.result.result.length ?
                            <table id="scores">
                              <tbody>
                                <tr>
                                  <th>Weights</th>
                                  <th>{experiment.experiment?.type === "simple-pendulum" ? "Time Period" : "Extension"}</th>
                                </tr>
                                {this.getResult(experiment.result.result[0])}
                              </tbody>
                            </table>
                            : null}
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>)
            })}
          </Accordion>
        </div>
      );
    return <></>
  }
}
