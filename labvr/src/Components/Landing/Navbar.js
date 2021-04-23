import React from "react";
import "./Landing.css";
export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage:this.props.currentpage
        }
    }
    setAct=(num)=>{
        this.setState({active:num});
    }
    getSidebarButtons = (currentPage) => {
        return [
          "signup",
          "login",
        ]
          .filter((item) => item !== currentPage)
          .map((item, index) => (
            <div className={item + " sidebar-menu-link"} key={index}>
              <span onClick={() => this.props.changePage(item)} key={item}>{""}</span>
            </div>
          ));
      };
    render() {
        return (
            <div className="sidebar-menu">
              {this.getSidebarButtons(this.state.currentPage)}
            </div>
        );
    }
}