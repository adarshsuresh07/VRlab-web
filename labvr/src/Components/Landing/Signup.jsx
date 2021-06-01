import React from "react";
import axios from 'axios'
import Loader from "react-loader-spinner";
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: '',
            password2: '',
            perror: '',
            cerror: '',
            error: '',
            loading: false,
            teacher: false
        }
    }
    signup = (e) => {
        e.preventDefault();
        const data = {
            "user": this.state.teacher ? "teacher" : "student",
            "fullname": this.state.fullname,
            "email": this.state.email,
            "password": this.state.password,
            "password2": this.state.password2
        }
        if (!this.state.error) {
            this.setState({ loading: true });
            axios
                .post("https://vrlabserver.herokuapp.com/api/register", data)
                .then(res => {
                    console.log(res);
                    // this.props.switch("\login");
                })
                .catch(error => {
                    if (error.response && error.response.data.msg) {
                        this.setState({ error: error.response.data.msg });
                        document.getElementById("login-error").className = "error-seen";
                        setTimeout(() => {
                            document.getElementById("login-error").className = "error-hidden";
                            this.setState({ error: " " });
                        }, 5000);
                    }
                }).finally(() => {
                    this.setState({ loading: false });
                })
        }
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
            <form className="landing-div2" onSubmit={this.signup}>
                <small id="login-error" className={this.state.perror || this.state.cerror? "error-seen": "error-hidden"}>
                    <Loader
                        type="Puff"
                        color="red"
                        height={18}
                        width={18}
                    // timeout={3000} //3 secs
                    /> &nbsp;
                    {this.state.error}
                </small>
                <input type="text" className="normal-input" placeholder="Full Name" onChange={e => this.setState({ fullname: e.target.value })} required />
                <input type="email" className="normal-input" placeholder="Email Id" onChange={e => this.setState({ email: e.target.value })} required />
                <input type="password" className="normal-input" placeholder="Password" onChange={this.validatePassword} required />
                <input type="password" className="normal-input" placeholder="Confirm Password" onChange={this.validateCPassword} required />
                <div className="login-buttons">
                    <label className="switch">
                        <input type="checkbox" onChange={() => this.setState({ teacher: !this.state.teacher })} />
                        <span className="slider round"></span>
                    </label>
                    <button type="submit" disabled={this.state.loading}>
                        {this.state.loading ? <Loader
                            type="TailSpin"
                            color="aqua"
                            height={18}
                            width={18}
                        // timeout={3000} //3 secs
                        /> : null}
                     &nbsp;
                     Signup as {this.state.teacher ? "Teacher" : "Student"}
                    </button>
                </div>
            </form>
        );
    }
}