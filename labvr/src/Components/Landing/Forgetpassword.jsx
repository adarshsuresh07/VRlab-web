import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            password2: '',
            perror: '',
            cerror: '',
            error: '',
            loading: false,
            teacher: false
        }
    }
    reset = () => {
        this.props.switch("/login");
    }
    validatePassword = (e) => {
        if (e.target.value.length < 8)
            this.setState({
                perror: 'Password: atleast 8 characters',
                error: 'Password: atleast 8 characters'
            });
        else {
            if (e.target.value !== this.state.password2)
                this.setState({
                    perror: '',
                    cerror: 'Passwords should match',
                    error: 'Password should match'
                });
            else
                this.setState({
                    perror: '',
                    cerror: '',
                    error: ''
                });
        }
        this.setState({ password: e.target.value })
    }

    validateCPassword = (e) => {
        if (e.target.value !== this.state.password)
            this.setState({
                cerror: 'Passwords should match',
                error: 'Password should match'
            });
        else
            this.setState({
                cerror: '',
                error: this.state.perror
            });
        this.setState({ password2: e.target.value })
    }
    render() {
        return (
            <form className="landing-div2" onSubmit={this.reset}>
                <small style={{ color: "red" }}>{this.state.error}</small>
                <input type="password" className="normal-input" placeholder="Password" onChange={this.validatePassword} required />
                <input type="password" className="normal-input" placeholder="Confirm Password" onChange={this.validateCPassword} required />
                <div className="login-buttons">
                    <button type="submit">Reset Password</button>
                </div>
            </form>
        );
    }
}