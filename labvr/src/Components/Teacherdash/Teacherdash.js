import React from 'react'
import Profile from '../Dashboard/Profile';
import Scores from '../Dashboard/Scores';
import { Accordion, Card } from 'react-bootstrap'
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
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
                    </div>
                </main>
            </div>

        );
    }
}

export default Dashboard;