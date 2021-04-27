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
                <button className="logout">Reset Password</button>
                <button className="logout" onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
export default Profile;