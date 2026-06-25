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
    this.setState({ userInfo: data });
  }
  componentDidUpdate() {}
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="flex border p-4 m-4 rounded-lg">
        <div className="w-56 mr-10">
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
