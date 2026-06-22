import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Hello");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("unmount");
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
