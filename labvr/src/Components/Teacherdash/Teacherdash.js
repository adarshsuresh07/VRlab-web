import React from 'react'
import Profile from '../Dashboard/Profile';
import Scores from '../Dashboard/Scores';
import { Accordion, Card, Modal, Button } from 'react-bootstrap'
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show: false
        }
    }

    closeModal=()=>{
        this.setState({show:!this.state.show});
    }

    render() {
        return (
            <div className="overlay">
                <main>
                    <div className="row">
                        <div className="sidebar">
                            <Profile />
                        </div>
                        <div className="listexp">
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Experiment 2 - Pendulum<br></br> 29/11/2020
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Scores />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Experiment 1 - Hooke's law<br></br> 22/11/2020
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            Hi
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <button className="startlab" onClick={this.closeModal}>Start Lab</button>
                        <Modal
                            show={this.state.show}
                            onHide={this.closeModal}
                            size="sm"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header 
                                style={{backgroundColor:"#16213e", color:"aqua"}}
                            closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Share the key
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body
                                style={{backgroundColor:"#16213e", color:"aqua"}}
                            >
                                {/* <h4>KEY</h4> */}
                                <p>
                                &emsp;eoj-jqaq-zdn
                                </p>
                            </Modal.Body>
                            {/* <Modal.Footer>
                                <Button onClick={this.closeModal}>Close</Button>
                            </Modal.Footer> */}
                        </Modal>
                    </div>
                </main>
            </div>

        );
    }
}

export default Dashboard;