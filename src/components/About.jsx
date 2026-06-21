import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namastey JS App</h2>
        <UserClass name={"Yashwant Choudhary (Class)"} location={"Pune"} />
      </div>
    );
  }
}

export default About;
