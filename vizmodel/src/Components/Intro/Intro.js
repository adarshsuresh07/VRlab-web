import React from 'react'
import './Intro.css'
import Hero from '../../Assets/Images/hero-img.png'
import Logo from '../../Assets/Images/Logo.png'


class Intro extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            example:false
        }
    }
    render(){
        return(
            <div className="intro">
                <img src={Hero} class="hero-image"></img>
                <div class="hero-box">
                    <img src={Logo} class="logo"></img>
                    <h1 class="hero-title">Citizen Needs <br/>Mapping</h1>
                    
                </div>
                <div>
                    <p class="hero-text">How interested would you be to <br/>share us what you need from the society and the authorities ?<br/>Join us in contributing to this! </p>
                </div>
            </div>
        )
    }
}
export default Intro;