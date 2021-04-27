import React from "react";
import Login from "./Login"
import Signup from "./Signup"
import Navbar from "./Navbar"
import Sendemail from "./Sendemail"
import Forgot from "./Forgetpassword"
import "./Landing.css";
export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: false
        }
    }
    switch = (s) => {
        this.props.history.push(s);
    }
    render() {
        return (
            <div className="landing-home">
                {this.props.history.location.pathname === "/login" ||
                this.props.history.location.pathname === "/signup" ?
                <Navbar {...this.props} switch={this.switch} />: <div className="sidebar-menu"/>}
                <div className="landing-div-outer">
                    <div className="landing-div1">
                        <span onClick={() => this.props.history.push("/")} style={{cursor: "pointer"}}>LabVR</span>
                    </div>
                    {
                        this.props.history.location.pathname === "/login" ?
                            <Login switch={this.switch} />
                            : this.props.history.location.pathname === "/signup" ?
                                <Signup switch={this.switch} />
                                : this.props.history.location.pathname === "/send-email" ?
                                    <Sendemail switch={this.switch} />
                                    : this.props.history.location.pathname === "/forgot-password" ?
                                        <Forgot switch={this.switch} />
                                        : <div className="landing-div2">
                                            <p style={{ color: "white" }}>Welcome to our webpage</p>
                                            <button className="logout" onClick={() => this.props.history.push("/login")}>Login</button>
                                            <button className="logout" onClick={() => this.props.history.push("/signup")}>Signup</button>
                                        </div>
                    }
                </div>
            </div>
        );
    }
}