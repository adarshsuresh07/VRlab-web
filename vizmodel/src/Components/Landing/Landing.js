import React from 'react'
import './Landing.css'
import Topnav from '../Topnav/Topnav'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

class Landing extends React.Component{
    constructor(props)
    {
        super(props);
    }
  
    render(){
        return(
            <div className="Landing">
                <Topnav/>
                <Body />
                <Footer />
            </div>
        )
    }
}
export default Landing;