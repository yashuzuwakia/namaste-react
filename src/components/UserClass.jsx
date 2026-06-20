import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
    console.log(props);
  }
  render() {
    return (
      <div className="user-content">
        <h2>Name: {this.state.name}</h2>
        <h3>Location: Pune</h3>
      </div>
    );
  }
}

export default UserClass;
