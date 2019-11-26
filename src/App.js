import React from 'react';
import './App.css';
import StatBlock from "./StatBlock";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      str : {base: 10, modifier: 0},
      dex : {base: 10, modifier: 0},
      con : {base: 10, modifier: 0},
      int : {base: 10, modifier: 0},
      wis : {base: 10, modifier: 0},
      cha : {base: 10, modifier: 0},
    }
}

  statchange = (name, base, modifier) => {
    switch(name) {
      case "str" : this.setState({str: {base: base, modifier: modifier}})
        break
      case "dex" : this.setState({dex: {base: base, modifier: modifier}})
        break
      case "con" : this.setState({con: {base: base, modifier: modifier}})
        break
      case "int" : this.setState({int: {base: base, modifier: modifier}})
        break
      case "wis" : this.setState({wis: {base: base, modifier: modifier}})
        break
      case "cha" : this.setState({cha: {base: base, modifier: modifier}})
        break
      default :
    }
  }
  
  render(i){
    return (
      <div className="App">
        <h1>Character Sheet</h1>
        <div className="name"><textarea></textarea></div>
        <div className="statWrapper">
          <StatBlock name="str" statchange={this.statchange} base={this.state.str.base} modifier={this.state.str.modifier} />
          <StatBlock name="dex" statchange={this.statchange} base={this.state.dex.base} modifier={this.state.dex.modifier}/>
          <StatBlock name="con" statchange={this.statchange} base={this.state.con.base} modifier={this.state.con.modifier}/>
          <StatBlock name="int" statchange={this.statchange} base={this.state.int.base} modifier={this.state.int.modifier}/>
          <StatBlock name="wis" statchange={this.statchange} base={this.state.wis.base} modifier={this.state.wis.modifier}/>
          <StatBlock name="cha" statchange={this.statchange} base={this.state.cha.base} modifier={this.state.cha.modifier}/>
        </div>
      </div>
  );}

}

export default App;
