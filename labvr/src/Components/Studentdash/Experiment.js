import React, { Component } from "react";
import Collapsible from "react-collapsible";
import { Accordion, Card } from "react-bootstrap";

export default class Experiment extends Component {
  render() {
    return (
      <div className="">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Experiment 2 - Pendulum<br></br> 29/11/2020
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>Question: inakn na dfin adkf kjj akj a</ul>
                <ul> Max Score: jkaba</ul>
                <ul>Due: 12323</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Experiment 1 - Hooke's law<br></br> 22/11/2020
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hi</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
