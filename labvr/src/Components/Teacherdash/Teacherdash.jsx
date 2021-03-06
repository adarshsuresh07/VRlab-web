import React from 'react'
import Profile from '../Dashboard/Profile';
import Scores from '../Dashboard/Scores';
import LoaderPage from "../Loader/Loader"
import "../Dashboard/dashboard.css"
import { getTokena } from "../../utils/Token"
import axios from "axios"
import Experiment from "./Experiment"
import { Accordion, Card, Modal } from 'react-bootstrap'
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            details: null,
            type: 'simple-pendulum',
            key: null,
            loading: false,
            experiment: {},
        }
    }
    componentDidMount() {
        this.setState({ loading: true });
        axios.post("https://vrlabserver.herokuapp.com/api/teacher/" + getTokena(), {},
            {
                headers: {
                    'authorization': "token " + getTokena()
                }
            })
            .then(res => {
                console.log(res.data);
                axios.post("https://vrlabserver.herokuapp.com/api/experiment/teacher/read/" + getTokena(), {},
                    {
                        headers: {
                            'authorization': "token " + getTokena()
                        }
                    })
                    .then(res => {
                        this.setState({ experiment: res.data });
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

    createKey = () => {
        // this.setState({ key: "exchl9" });
        this.setState({ loading: true });
        axios.post("https://vrlabserver.herokuapp.com/api/experiment/teacher/create/" + getTokena(),
            {
                email: this.state.details.email,
                type: this.state.type
            },
            {
                headers: {
                    'authorization': "token " + getTokena()
                }
            })
            .then(res => {
                this.setState({ key: res.data.key });
            })
            .catch(error => {
                console.log(error.response);
                if (error.response && error.response.data.msg)
                    console.log(error.reponse.data);
            }).finally(() => {
                this.setState({ loading: false });
            })
    }

    closeModal = () => {
        this.setState({ show: !this.state.show });
        this.setState({ key: null });
    }

    copyLink = () => {
        var text = this.state.key;
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (document.getElementById("copy-clip"))
            document.getElementById("copy-clip").className = "modal-show-copy-link";
        setTimeout(() => {
            if (document.getElementById("copy-clip"))
                document.getElementById("copy-clip").className = "modal-copy-link";
        }, 3000);
    }


    render() {
        return (
            <div className="overlay">
                {this.state.loading ? <LoaderPage /> : <></>}
                <div className="sidebar">
                    <Profile {...this.props} details={this.state.details} teacher={true} />
                </div>
                <div className="listexp">
                    <Experiment experiments={this.state.experiment}/>
                </div>
                <button className="startlab" onClick={this.closeModal}>Start Lab</button>
                {this.state.key ?
                    <Modal
                        show={this.state.show}
                        onHide={this.closeModal}
                        size="sm"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header
                            style={{ backgroundColor: "#16213e", color: "aqua" }}
                            closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Share the key
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body
                            style={{ backgroundColor: "#16213e", color: "aqua" }}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <span onClick={this.copyLink} style={{ color: "aqua", cursor: "pointer", fontSize: "1.5rem" }}>
                                    <i title="Copy to clipboard" className="fa fa-clipboard" aria-hidden="true"></i>
                                </span>
                                &emsp; &emsp; &emsp;
                                <span style={{ fontSize: "1rem", fontStrength: "bold" }}>
                                    {this.state.key}
                                </span>
                            </div>
                            <small className="modal-copy-link" id="copy-clip" style={{ color: "aqua" }}>Key copied to Clipboard!</small>
                        </Modal.Body>
                        {/* <Modal.Footer>
                                <Button onClick={this.closeModal}>Close</Button>
                            </Modal.Footer> */}
                    </Modal> :
                    <Modal
                        show={this.state.show}
                        onHide={this.closeModal}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header
                            style={{ backgroundColor: "#16213e", color: "aqua" }}
                            closeButton>
                            <button
                                className={"Radio but-left " + (this.state.type === "simple-pendulum" ? "but-active" : "but-inactive")}
                                onClick={() => this.setState({ type: "simple-pendulum" })}
                            >
                                Simple Pendulum
                            </button>
                            <button
                                className={"Radio but-right " + (this.state.type === "simple-pendulum" ? "but-inactive" : "but-active")}
                                onClick={() => this.setState({ type: "hookes-law" })}
                            >
                                Hooke's law
                            </button>
                        </Modal.Header>
                        {this.state.type === "simple-pendulum" ?
                            <Modal.Body
                                style={{ backgroundColor: "#16213e", color: "aqua" }}
                            >
                                <p>
                                    To study variation of time period of a simple pendulum of a given length by taking bobs of same size but different masses and interpret the result
                                </p>
                            </Modal.Body>
                            :
                            <Modal.Body
                                style={{ backgroundColor: "#16213e", color: "aqua" }}
                            >
                                <p>
                                    To prove Hooke’s law i.e. the extension of the force is directly proportional to the force applied.
                                </p>
                            </Modal.Body>
                        }
                        <Modal.Footer style={{ backgroundColor: "#16213e", color: "aqua" }}>
                            <button className="logout" style={{ margin: "0" }} onClick={() => this.createKey()}>Generate Key</button>
                        </Modal.Footer>
                    </Modal>
                }
            </div>

        );
    }
}

export default Dashboard;