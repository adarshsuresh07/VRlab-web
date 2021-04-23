import React from "react";

export default class Login extends React.Component {
    signup = () => {
            this.props.switch("/login");
    }
    render() {
        return (
            <form className="landing-div2" onSubmit={this.signup}>
                <input className="normal-input" type="password" placeholder="Password" required/>
                <input className="normal-input" type="password" placeholder="Confirm Password" required/>
                <div className="login-buttons">
                    <button type="submit">Reset Password</button>
                </div>
            </form>
        );
    }
}