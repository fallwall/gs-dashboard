import React, { Component } from 'react';
import UserForm from './components/UserForm';
import {
  loginUser,
  registerUser,
  verifyToken
} from './services/api';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      isLoggingin: true,
      userForm: {
        username: "",
        email: "",
        password: "",
        email: ""
      }
    }
  }

  handleLogin = async (ev) => {
    const loginData = {
      username: this.state.userForm.username,
      password: this.state.userForm.password
    }
    const user = await loginUser(loginData);
    console.log(user);
    this.setState({
      currentUser: user
    })
  }

  handleRegister = async (ev) => {
    await registerUser(this.state.userForm);
    this.handleLogin();
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      userForm: {
        ...prevState.userForm,
        [name]: value
      }
    }));
  }

  switchForm = () => {
    this.setState(prevState => ({
      isLoggingin: !prevState.isLoggingin
    }))
  }

  componentDidMount = async () => {
    const user = await verifyToken();
    if (user) {
      this.setState({
        currentUser: user
      })
    }
  }

  render() {
    return (
      <div className="App">
        <p>front end begins</p>
        <UserForm
          userForm={this.state.userForm}
          handleChange={this.handleChange}
          handleRegister={this.handleRegister}
          handleLogin={this.handleLogin}
          isLoggingin={this.state.isLoggingin}
          switchForm={this.switchForm}
        />
      </div>
    )
  }
}

export default App;
