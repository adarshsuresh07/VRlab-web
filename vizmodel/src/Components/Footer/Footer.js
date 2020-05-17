import React from 'react'
import './Footer.css'
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            example: false
        }
    }
    render() {
        return (
            <div class="footer">
                <span>
                    &copy; Copyright Governance Innovation Labs.
                </span>
            </div>
        )
    }
}
export default Footer;