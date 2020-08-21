import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import gitimg from "./image/git-img.png";
import gitpro from "./image/git-pro.png";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      username: "jabi-jaleel",
      api: "https://api.github.com/users/",
    };
  }

  componentDidMount() {
    axios.get(this.state.api + this.state.username).then((response) => {
      this.setState({
        users: response.data,
      });
      console.log(response.data);
      console.log(this.state.users.id);
    });
  }

  fetchdata = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    axios
      .get(this.state.api + event.target.username.value)
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log(response.data);
        console.log(this.state.users.id);
      })
      .catch(function (error) {
        // handle error
        alert("Please enter valid Github username ");
      });
  };

  render() {
    return (
      <>
        <main className="main-container">
          <div className="git-image">
            <img src={gitimg} alt="" />
          </div>
          <form className="searchfield" onSubmit={this.fetchdata}>
            <input
              type="text"
              placeholder="Type Github username and enter"
              name="username"
            />
          </form>
          <div className="profile-container">
            <img src={this.state.users.avatar_url} alt="" />
            <h3>{this.state.users.name}</h3>
            <h6>{this.state.users.location}</h6>
          </div>
          <div className="git-container">
            <div className="git-detail">
              <h5>{this.state.users.followers}</h5>
              <h6>Followers</h6>
            </div>
            <div className="git-detail">
              <h5>{this.state.users.public_repos}</h5>
              <h6>Repositary</h6>
            </div>
            <div className="git-detail">
              <h5>{this.state.users.following}</h5>
              <h6>Following</h6>
            </div>
          </div>
        </main>
        <footer>
          <h6>
            Designed & Developed by <a href="">Jabir Jaleel</a>
          </h6>
        </footer>
      </>
    );
  }
}
