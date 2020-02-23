import React, { Component } from 'react';
import UserForm from './components/UserForm';
import Intro from './pages/Intro';
import InitTrip from './pages/InitTrip';
import TrelloBoard from './pages/TrelloBoard';
import {
  loginUser,
  registerUser,
  verifyToken
} from './services/api';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isLoggingin: true,
      isIntro: true,
      userForm: {
        username: "",
        email: "",
        password: "",
        email: ""
      },
      tripForm: {
        tripName: null,
        startDate: null,
        endDate: null
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

  closeIntro = () => {
    setTimeout(() => {
      this.setState({
        isIntro: false
      })
    }, 7000);
  }

  componentDidMount = async () => {
    // const today = moment(new Date());
    // console.log(today.format("DD-MM-YYYY"));
    const user = await verifyToken();
    if (user) {
      this.setState({
        currentUser: user
      })
    }

    this.closeIntro();
  }

  changeTripName = (ev) => {
    const { value } = ev.target;
    this.setState(prevState => ({
      tripForm: {
        ...prevState.tripFrom,
        tripName: value
      }
    }))
  }

  onStartDateChange = (ev) => {
    const startDate = ev.target.value;
    this.setState(prevState => ({
      tripForm: {
        ...prevState.tripFrom,
        startDate: startDate
      }
    }))
  }
  onEndDateChange = (ev) => {
    const endDate = ev.target.value;
    this.setState(prevState => ({
      tripForm: {
        ...prevState.tripFrom,
        endstDate: endDate
      }
    }))
  }

  render() {
    const { startDate, endDate, tripName } = this.state.tripForm;

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
          {
            this.state.isIntro && <Intro />
          }
          <InitTrip
            tripName={tripName}
            startDate={startDate}
            endDate={endDate}
            changeTripName={this.changeTripName}
            onStartDateChange={this.onStartDateChange}
            onEndDateChange={this.onEndDateChange}
          />
          <TrelloBoard />
        </div>

      </div>
    )
  }
}



export default App;
