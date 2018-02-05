import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import index from "./index";
import signup from "./Auth/signup";
import signin from "./Auth/signin";
import signout from "./Auth/signout";
import requier_auth from "./Auth/requier_auth";
import chatbox from "./Auth/chatbox";



class Homepage extends Component {
  handlesubmit=(event)=> {
 event.preventDefault
 };
  render() {
    console.log(this.handlesubmit);
    return (
      
      
      <div className="App">
        <header className="App-header">

      <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ohio_State_Buckeyes_logo.svg/60px-Ohio_State_Buckeyes_logo.svg.png" event></img>
        <h1 className="App-title">Ohio State Buckeyes Social Network</h1>
        <button type="submit" onClick={ event => this.handlesubmit(event) } class="signupbtn">Sign Up</button>
        <button type="button" onClick={ event => this.handlesubmit(event) } class="signinbtn">Sign In</button>    
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default Homepage;
