import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    signup = () => {
        this.props.switch("/forgot-password");
    }
    render() {
        return (
            <form className="landing-div2" onSubmit={this.signup}>
                <input className="normal-input" type="email" placeholder="Email" required/>
                <div className="login-buttons">
                    <button type="submit" >Send email</button>
                </div>
            </form>
        );
    }
}