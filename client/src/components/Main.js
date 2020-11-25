import { Component } from "react";
import API from "../utils/API";
// import axios from "axios";

class Main extends Component {
  state = {
   users: [],
    search: "",
  };

  componentDidMount() {
    API.getAllUsers().then(response => this.setState({
        users: response.data.results
    })).catch(e => console.log(e))
  }
  render() {
    return <div>
       
    
    </div>;
  }
}

export default Main;
