import React from "react";
import { loginu, logina } from "../../utils/Token"
import axios from 'axios'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            teacher: false,
            error: " "
        }
    }

    Userlogin = e => {
        e.preventDefault();
        this.setState({ loading: true });
        axios.post("https://vrlabserver.herokuapp.com/api/login",
            {
                "user": this.state.teacher ? "teacher" : "student",
                "email": this.state.email,
                "password": this.state.password
            })
            .then(res => {
                const token = res.data.token;
                this.state.teacher ? logina(token) : loginu(token);
                // console.log(res);
            })
            .catch(error => {
                if (error.response && error.response.data.msg){
                    this.setState({ error: error.response.data.msg });
                    document.getElementById("login-error").className="error-seen";
                    setTimeout(() => {
                        document.getElementById("login-error").className="error-hidden";
                        this.setState({error:" "});
                    }, 5000);
                }
            }).finally(() => {
                this.setState({ loading: false });
            })
    }
    render() {
        return (
            <form className="landing-div2" onSubmit={this.Userlogin}>
                <small id="login-error" className="error-hidden">{this.state.error}</small>
                <input className="normal-input" type="email" onChange={e => this.setState({ email: e.target.value })} placeholder="Email" required />
                <input className="normal-input" type="password" onChange={e => this.setState({ password: e.target.value })} placeholder="Password" required />
                <div className="login-buttons">
                    <label className="switch">
                        <input type="checkbox" onChange={() => this.setState({ teacher: !this.state.teacher })} />
                        <span className="slider round"></span>
                    </label>
                    <button type="submit" >Login as {this.state.teacher ? "Teacher" : "Student"}</button>
                </div>
                <a style={{ color: "aqua" }} href="\send-email">Forgot password?</a>
            </form>
        );
    }
}