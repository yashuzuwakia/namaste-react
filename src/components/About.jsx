import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namastey JS App</h2>
      <User />
      <UserClass name={"Yashwant Choudhary (Class)"} />
    </div>
  );
};

export default About;
