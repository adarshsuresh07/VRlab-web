import React from 'react'
import './Barplot.css'
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";


class Barplot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            barplot: 0
        }
    }
    render() {
        return (
            <div className="plot">
                <h2>Barplot</h2>
                <Row>
                    <Col sm={3}>
                        <small>Choose the need:&nbsp; &nbsp; </small>
                    </Col>
                    <Col sm={9}>
                        <Form.Group>
                            <Form.Control as="select" size="sm" className="mb-0" onChange={e => this.setState({ barplot: e.target.value })}>
                                <option value={0}>Basic Need</option>
                                <option value={1}>Standard Need</option>
                                <option value={2}>Premium Need</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.state.barplot == 0 ?
                            <img className="barplot" src="http://127.0.0.1:5000/barplot-basic" alt="Basic Need" />
                            : this.state.barplot == 1 ?
                                <img className="barplot" src="http://127.0.0.1:5000/barplot-standard" alt="Standard Need" />
                                : <img className="barplot" src="http://127.0.0.1:5000/barplot-premium" alt="Premium Need" />
                        }</Col>
                </Row>
            </div>
        )
    }
}
export default Barplot;