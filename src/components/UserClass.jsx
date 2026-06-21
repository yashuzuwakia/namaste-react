import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor");
  }
  componentDidMount() {
    console.log("Child componentDidMount");
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log("Child Render");

    return (
      <div className="user-content">
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: iamyash@gmnail.com</h4>
      </div>
    );
  }
}

export default UserClass;
