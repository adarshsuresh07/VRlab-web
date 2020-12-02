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
                <ul>Key: ssb-zzwt-nti</ul>
                <ul>Under: User Name</ul>
                <ul>Max Score: 40</ul>
                <ul>Your Score: 35</ul>
                <ul>Start Time: 1:45pm</ul>
                <ul>End Time: 2:25pm</ul>
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
