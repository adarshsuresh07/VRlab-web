import React from 'react';

class Scores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ id: 1, name: 'Abhishek Manoharan', email: "mano@gmail.com", time:"45min",marks: 40 },
            { id: 2, name: 'Abhishek S', email: "shiku@gmail.com", time:"42min",marks: 39 },
            { id: 3, name: 'Abhishek T', email: "atholi@gmail.com", time:"50min",marks: 37 },
            { id: 4, name: 'Abin Baby', email: "baby@gmail.com", time:"40min",marks: 35 },
            { id: 5, name: 'Abinand', email: "monuttan@gmail.com", time:"1hr 05min",marks: 40 },
            { id: 6, name: 'Adarsh Vijay', email: "vijay@gmail.com", time:"35min",marks: 35 },
            { id: 7, name: 'Adarsh S', email: "adarsh@gmail.com", time:"15min",marks: 20 },
            ]
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
    var datatable = this.state.data.map((item, key) => <tr><td>{item.name}</td><td>{item.email}</td><td>{item.time}</td><td>{item.marks}</td></tr>);
        return (
            <div className="Scores">
                {/* <div className="jumbotron" style={{ background: 'white', padding: '5vw' }}> */}
                    {/* <div className="row"> */}
                        <table id="scores">
                            <tr>
                                <th>Name</th>
                                <th>Email id</th>
                                <th>Time taken</th>
                                <th>Marks obtained</th>
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