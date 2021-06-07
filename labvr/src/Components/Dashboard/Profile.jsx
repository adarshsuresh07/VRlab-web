import React from 'react'
import logo from '../../Assets/images/ava.png';
import { logoutu, logouta } from "../../utils/Token"
class Profile extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { details: this.props.details }
    }
    logout = () => {
        this.props.teacher ? logouta() : logoutu();
        this.props.history.push("/");
        return false;
    }
    reset = () => {
        this.props.teacher ? this.props.history.push("/teacher-reset-password") : this.props.history.push("/student-reset-password");
    }
    render() {
        return (
            <div className="profile">
                <img src={logo} className="Profile-pic" alt="logo" />
                <div className="profile-details">
                    {this.props.details ? this.props.details.fullname : " "}
                    <br />
                    {this.props.details ? this.props.details.email : " "}
                    {/* <br/> */}
                    {/* {this.state.profileval.college} */}
                </div>
                {this.props.teacher ? null : <div className="profile-selects">
                    <span><input type="checkbox" checked={this.props.showsubmitted} onChange={this.props.showSubmitted} /> Submitted</span>
                    <span><input type="checkbox" checked={this.props.showunsubmitted} onChange={this.props.showUnSubmitted} /> Unsubmitted</span>
                </div>}
                <button className="logout" onClick={this.reset}>Reset Password</button>
                <button className="logout" onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
export default Profile;