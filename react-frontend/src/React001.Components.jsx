import React from "react";

// Class component => extend React.component
class User1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>User: {this.props.name}</h3>
                <p>Age: {this.props.age}
                    <br />Gender: {this.props.gender}
                    <br />Telephone: {this.props.tel}
                </p>
            </div>
        )
    }
}

// functional Components (recommended)
function User2 ({name, age, gender, tel}) {
    return (
        <div>
            <h3>User: {name}</h3>
            <p>Age: {age}
                <br />Gender: {gender}
                <br />Tel: {tel}
            </p>
        </div>
    )
}

// nested component
function User() {
    return (
        <div>
            <h1>React Component</h1>
            <User1 name='vduczz' age='21' gender='Male' tel='+00999999999' />
            <User2 name='quanh' age='18' gender='Female' tel='+0099999998' />
        </div>
    )
}

// export component
export default User;