import React, { Component } from "react";
import Collapsible from "react-collapsible";
import { Accordion, Card, Modal } from "react-bootstrap";

export default class Experiment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      modal_data: {}
    }
  }

  closeModal = () => {
    this.setState({ modal_data: {}, show: false });
  }

  toStandard = (date) => {
    // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var day = new Date(date);
    return day.toLocaleString("en-US");
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

  getStudents = (data) => {
    console.log(data);
    if (data)
      return data.map((item, index) => {
        var start = new Date(item.created_at);
        return (
          <tr style={{ cursor: "pointer" }} onClick={() => this.setState({ modal_data: item, show: true })}>
            <td>{index+1}</td>
            <td>{item.done_by}</td>
            <td>{start.toLocaleString("en-US")}</td>
            <td>{item.submitted ? "Submitted" : "Pending"}</td>
          </tr>)
      })
  }

  render() {
    const experiment = this.props.experiments.exp_data ?? {};
    console.log(experiment)
    if (this.props.experiments)
      return (
        <div className="">
          <Accordion>
            {Object.keys(experiment).map(key => {
              return (
                <Card key={key} style={{ marginBottom: "10px", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
                  <Accordion.Toggle as={Card.Header} eventKey={key}>
                    <div className="accordion-text">
                      <div>Experiment - {experiment[key].experiment?.type === "simple-pendulum" ? "Simple Pendulum" : "Hooke's Law"}<br />
                        <span style={{ fontSize: "12px" }}>{this.toStandard(experiment[key].experiment?.created_at)} </span>
                      </div>
                      {/* <span style={{ color: experiment.result.submitted ? "#16253e" : "red", fontSize: "12px" }}>{experiment.result.submitted ? "Submitted" : "Not submitted"}</span> */}
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={key}>
                    <Card.Body>
                      <div className="accordion-body">
                        {/* <div className="accordion-data">
                               <span>Key: {experiment.result.key}</span>
                               <span>Under: {experiment.experiment?.created_by}</span>
                               <span>Max Score: 40</span>
                               <span>Your Score: 35</span>
                               <span>Start Time: {this.toStandard(experiment.result.created_at)}</span>
                               <span>End Time: {this.toStandard(experiment.result.updated_at)}</span>
                             </div> */}
                        {experiment[key]?.results && experiment[key]?.results.length ?
                          <table id="scores">
                            <tbody>
                              <tr>
                                <th>Slno.</th>
                                <th>Student</th>
                                <th>Start time</th>
                                <th>Status</th>
                              </tr>
                              {this.getStudents(experiment[key]?.results)}
                            </tbody>
                          </table>
                          : <div className="accordion-body">No Submissions Yet!</div>}
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>)
            })}
          </Accordion>
          <Modal
            show={this.state.show}
            onHide={this.closeModal}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header
              style={{ backgroundColor: "#16213e", color: "aqua" }}
              closeButton >
              Result
            </Modal.Header>
            <Modal.Body
              style={{ backgroundColor: "#16213e", color: "aqua" }}
            >
              <div className="accordion-body">
                <div className="accordion-data">
                  <span>Key: {this.state.modal_data?.key}</span>
                  {/* <span>Max Score: 40</span> */}
                  {/* <span>Your Score: 35</span> */}
                  <span>Start Time: {this.toStandard(this.state.modal_data?.created_at)}</span>
                  {this.state.modal_data?.submitted ?
                    <span>End Time: {this.toStandard(this.state.modal_data?.updated_at)}</span>
                    : <span>Not submitted Yet!</span>}
                </div>
                {this.state.modal_data?.result && this.state.modal_data?.result.length ?
                  <table id="scores">
                    <tbody>
                      <tr>
                        <th>Weights</th>
                        <th>{experiment[this.state.modal_data?.key].experiment?.type === "simple-pendulum" ? "Time Period" : "Extension"}</th>
                      </tr>
                      {this.getResult(this.state.modal_data.result[0])}
                    </tbody>
                  </table>
                  : null}
              </div>

            </Modal.Body>
          </Modal>
        </div>
      );
    return <></>
  }
}
