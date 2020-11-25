import { Component } from "react";
// import API from "../utils/API";
// import Info from "./Info";
// import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],

    }
  }
  componentDidMount() {

    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(res => {
        this.setState({
          items: res.results,
        })
      })
    // API.getAllUsers()
    // .then(res => {
    //   this.setState({
    //     items: res.results,
    //     // filteredUsers: results.data.results
    //   });
    // });
  }
  render() {
    var { items } = this.state
    return <div>
      {/* <Info users={this.state.users} /> */}
      {items.map(item => (
        <div>
          <img src={item.picture.medium} alt="" />
          <p>{item.name.first} {item.name.last}</p>
          <p>{item.email}</p>
          <p>{item.phone}</p>
        </div>
      ))}
    </div>;
  }
}

export default Main;
