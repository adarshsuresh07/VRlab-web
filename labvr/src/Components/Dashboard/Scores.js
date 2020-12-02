import React from 'react';

class Scores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ id: 1, name: 'Abhishek Manoharan', email: "mano@gmail.com", start:"1:45pm",end:"2:30pm",marks: 40 },
            { id: 2, name: 'Abhishek S', email: "shiku@gmail.com", start:"1:48pm",end:"2:40pm",marks: 39 },
            { id: 3, name: 'Abhishek T', email: "atholi@gmail.com", start:"1:50pm",end:"2:43pm",marks: 37 },
            { id: 4, name: 'Abin Baby', email: "baby@gmail.com",  start:"1:45pm",end:"2:34pm",marks: 35 },
            { id: 5, name: 'Abinand', email: "monuttan@gmail.com", start:"1:46pm",end:"2:35pm",marks: 40 },
            { id: 7, name: 'Adarsh S', email: "adarsh@gmail.com", start:"1:49pm",end:"Not Submitted",marks: "--" },
            { id: 6, name: 'Adarsh Vijay', email: "vijay@gmail.com", start:"1:55pm",end:"2:25pm",marks: 35 },
            ]
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
    var datatable = this.state.data.map((item, key) => <tr><td>{item.name}</td><td>{item.email}</td><td>{item.start}</td><td>{item.end}</td><td>{item.marks}</td></tr>);
        return (
            <div className="Scores">
                {/* <div className="jumbotron" style={{ background: 'white', padding: '5vw' }}> */}
                    {/* <div className="row"> */}
                        <table id="scores">
                            <tr>
                                <th>Name</th>
                                <th>Email id</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Marks</th>
                            </tr>
                            {datatable}
                        </table>
                    {/* </div> */}
                    {/* <!--div className="row">haha</div --> */}
                 {/* </div> */}
            </div>
        );
    }
}
export default Scores;