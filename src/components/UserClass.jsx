import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: props.name,
        location: props.location,
      },
    };
  }
  async componentDidMount() {
    const resposnse = await fetch("https://api.github.com/users/yashuzuwakia");
    const data = await resposnse.json();
    console.log(data);
    this.setState({ userInfo: data });
  }
  componentDidUpdate() {
    console.log("componentDidUpdated");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-content">
        <div className="image-container">
          <img src={avatar_url} alt="" className="avatar-image" />
        </div>
        <div>
          {" "}
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: iamyash@gmail.com</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
