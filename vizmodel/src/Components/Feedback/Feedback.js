import React from 'react'
import './Feedback.css'


class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    setData = e => {
        if (e.target.id == "name")
            this.setState({ name: e.target.value });
        else if (e.target.id == "email")
            this.setState({ email: e.target.value });
        else
            this.setState({ message: e.target.value });
    }
    upload = () => {
        console.log(this.state);
    }
    render() {
        return (
            <div className="feedback">
                <h1>Feedback</h1>
                <table>
                    <tbody>
                <tr>
                    <td><span>Email:</span></td>
                    <td><input id="email" type="email" onChange={this.setData} required /></td>
                    <td><span>Name:</span></td>
                    <td><input id="name" type="text" onChange={this.setData} required /></td>
                </tr>
                <tr>
                    <td><span>Message:</span></td>
                    <td><textarea id="message" row="5" col="50" onChange={this.setData} required /></td>
                    <td></td>
                    <td><button type="submit" onClick={this.upload}>Send</button></td>
                </tr>
                </tbody>
                </table>
            </div>
        )
    }
}
export default Feedback;