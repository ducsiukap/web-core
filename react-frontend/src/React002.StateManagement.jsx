// for class component
//  functional component is stateless -> use ReactHook to add state to component

import React from "react";

class MyComp extends React.Component {
    constructor() {
        // super(props);
        super();
        this.state = {name:""};
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});   
        console.log(this.state.name);
    }

    render() {
        return(
            <div>
                <label htmlFor="usrName">Your name</label>
                <input type="text" value={this.state.value} id="usrName" onChange={(event) => this.handleChange(event)}/>
                {/* or un-comment line 11
                 <input type="text" value={this.state.value} id="usrName" onChange={this.handleChange}/>*/}
                <h1 color="green">Hello {this.state.name}!!</h1>
            </div>
        )
    }
}

export default MyComp;