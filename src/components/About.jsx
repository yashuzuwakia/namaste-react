import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component {
  constructor() {
    super();
  }
  render() {
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
