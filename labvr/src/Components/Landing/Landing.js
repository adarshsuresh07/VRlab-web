import React from "react";
import "./Landing.css";

import NavigationBar from './NavigationBar.js';
// import SigninModal from "./Signin/SigninForm.js";
// import SignupModal from "./Signup/SignupForm.js";

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: false
        }
    }
    render() {
        return (
            <div className="landing-home">
                {/* <NavigationBar /> */}
                {/* <div className='center'>
                    <center>
                        Heading
                        <br />
                        <SigninModal /> &emsp;
                        <SignupModal />
                    </center>
                </div> */}
                <div className="landing-div-outer">
                    <div className="landing-div1">
                        <span>LabVR</span>
                    </div>
                    <div className="landing-div2">
                        <input className="normal-input" type="email" />
                        <input className="normal-input" type="password" />
                        <div className="login-buttons">
                            <label className="switch">
                                <input type="checkbox" onChange={() => this.setState({ teacher: !this.state.teacher })} />
                                <span className="slider round"></span>
                            </label>
                            <button>Login as {this.state.teacher ? "Teacher" : "Student"}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}