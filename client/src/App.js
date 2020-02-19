import React, { Component } from 'react';
import UserForm from './components/UserForm';
import Intro from './pages/Intro';
import InitTrip from './pages/InitTrip';
import {
  loginUser,
  registerUser,
  verifyToken
} from './services/api';
import 'react-dates/initialize';
import { Route } from 'react-router-dom';
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
      },
      tripForm: {
        tripName: null,
        startDate: null,
        endDate: null,
        focusedInput: null
      }
    }
  }

  handleLogin = async (ev) => {
    ev.preventDefault();
    const loginData = {
      username: this.state.userForm.username,
      password: this.state.userForm.password
    }
    const user = await loginUser(loginData);
    console.log("something happened.");
    this.setState({
      currentUser: user
    })
  }

  handleRegister = async (ev) => {
    await registerUser(this.state.userForm);
    this.handleLogin();
  }

  handleLogout = (ev) => {
    // ev.preventDefault();
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

  switchForm = (ev) => {
    ev.preventDefault();
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

  changeTripName = (ev) => {
    console.log(ev.target);
    const { value } = ev.target;
    this.setState(prevState => ({
      tripForm: {
        ...prevState.tripFrom,
        tripName: value
      }
    }))
  }

  dateSelected = () => {

  }

  focusedInoutSelected = () => {

  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <UserForm
            currentUser={this.state.currentUser}
            userForm={this.state.userForm}
            handleChange={this.handleChange}
            handleRegister={this.handleRegister}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            isLoggingin={this.state.isLoggingin}
            switchForm={this.switchForm}
          />
          <Intro
          />
          <InitTrip
            tripName={this.state.tripForm.tripName}
            changeTripName={this.changeTripName}
            startDate={this.state.tripForm.startDate}
            endDate={this.state.tripForm.endDate}
            focusedInput={this.state.tripForm.focusedInput}
            focusedInoutSelected={this.focusedInoutSelected}
            dateSelected={this.dateSelected}
          />
        </div>

      </div>
    )
  }
}

export default App;
