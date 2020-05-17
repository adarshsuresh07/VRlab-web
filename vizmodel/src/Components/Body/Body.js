import React from 'react'
import './Body.css'

import Intro from '../Intro/Intro'
import Model from '../Model/Model'
import Barplot from '../Barplot/Barplot'
import About from '../About/About'
import Feedback from '../Feedback/Feedback'
// import Map from '../Map/Map'


class Body extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <Intro />
                <Model />
                <Barplot />
                <About />
                <Feedback/>
            </div>
        )
    }
}
export default Body;