import React from 'react';
import './App.css';
import StatBlock from "./StatBlock";
import { NotifyReporter } from '@jest/reporters';

class App extends React.Component {

  statchange = (name) => {
    console.log("A stat has changed in " + name);
  }
  
  render(){
    return (
      <div className="App">
        <h1>Character Sheet</h1>
        <div className="name"></div>
        <div className="statWrapper">
          <StatBlock name="str" statchange={this.statchange} />
          <StatBlock name="dex" statchange={this.statchange} />
          <StatBlock name="con" statchange={this.statchange} />
          <StatBlock name="int" statchange={this.statchange} />
          <StatBlock name="wis" statchange={this.statchange} />
          <StatBlock name="cha" statchange={this.statchange} />
        </div>
      </div>
  );}

}

export default App;
