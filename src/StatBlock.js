import React from 'react';
import './App.css';

class StatBlock extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            base: 10,
            modifier: 0,
        }
    }

    calcModifier(stat) {
        return Math.floor((stat - 10) / 2);
    }

    updateStat = (event) => {
        var thisModifier = this.calcModifier(event.target.value);

        this.setState({
          base: event.target.value,
          modifier: thisModifier
        });

        this.props.statchange(this.state.name);
    }

    randomStat = (event) => {
        var stat = Math.floor((Math.random()*15) + 3)
        var thisModifier = this.calcModifier(stat);

        this.setState({
            base : stat,
            modifier: thisModifier
        })
    }

    render() {
        return(
        <div className="statbox">
            <div className="statname">{this.state.name}:</div>
            <div className="base"><textarea onChange={this.updateStat} value={this.state.base}/></div>
            <div className="modifier">{this.state.modifier}</div>
            <div className="randombutt" onClick={this.randomStat}></div>
        </div>
    );}
}
export default StatBlock;