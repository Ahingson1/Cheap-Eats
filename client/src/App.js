import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Homepage extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          
         <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ohio_State_Buckeyes_logo.svg/100px-Ohio_State_Buckeyes_logo.svg.png" align="Left" />
         <img id="Img" src="img.jpg" onClick="myFunction()" />
         <script> document.getElementById( "Img" ).onclick = function() {
    // img clicked
};
</script>
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default Homepage;
