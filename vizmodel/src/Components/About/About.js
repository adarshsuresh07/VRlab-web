import React from 'react'
import './About.css'


class About extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            example:false
        }
    }
    render(){
        return(
            <div class="abt">
                <h1>About</h1>
                <p class="text"><span>
                At Governance Innovation Labs, we aim to deliver good governance through civic engagement. In this model, citizens will be active co-producers of the public service rather than passive recipients of the public service. The citizens will also be engaged in developing, delivering and monitoring public service through a service aggregator model. The role of the government is to bring the demand side and supply side of public services together to create greater value. The government will act as an enabler that will bring together various stakeholders in public policy through coordination, management and monitoring. Governance Innovation Labs is an attempt to create a strong state through civic engagement.
                </span></p>
           </div>
        )
    }
}
export default About;