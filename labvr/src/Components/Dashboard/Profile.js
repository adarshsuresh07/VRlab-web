import React from 'react'
import logo from '../../Assets/images/ava.png';


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {profileval:{ name:"User Name",email:"emailid@abc.com", college:"ABC College"}}
    }
    render(){
        return (
        <div className="profile">
            <img src={logo} className="Profile-pic" alt="logo" />
            <div className="profile-details">
                {this.state.profileval.name}
                <br/>
                {this.state.profileval.email}
                <br/>
                {this.state.profileval.college}
            </div>
            <button className="logout">Reset Password</button>
            <button className="logout">Logout</button>
        </div>
        );
    }
}
export default Profile; 