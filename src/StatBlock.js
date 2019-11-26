import React from 'react';
import './App.css';

class StatBlock extends React.Component {

    calcModifier(stat) {
        return Math.floor((stat - 10) / 2);
    }

    updateStat = (event) => {
        var thisModifier = this.calcModifier(event.target.value);

        this.props.statchange(this.props.name, event.target.value, thisModifier);
    }

    randomStat = (event) => {
        var statarr = [];

        for (var i = 0; i < 4; i++) {
            statarr[i] = Math.ceil(Math.random()*6);
        }
        console.log(statarr);

        statarr.sort(function(a, b){return a - b});

        var stat = statarr[1] + statarr[2] + statarr[3];

        var thisModifier = this.calcModifier(stat);

        this.props.statchange(this.props.name, stat, thisModifier);
    }

    render() {
        return(
        <div className="statbox">
            <div className="statname" onClick={this.randomStat}>{this.props.name}:</div>
            <div className="base"><textarea onChange={this.updateStat} value={this.props.base}/></div>
            <div className="modifier">{this.props.modifier}</div>
        </div>
    );}
}
export default StatBlock;