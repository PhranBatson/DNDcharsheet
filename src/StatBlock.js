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

    updateStat = (event) => {
        var thisModifier = Math.floor((event.target.value - 10) / 2);

        this.setState({
          base: event.target.value,
          modifier: thisModifier
        });

        this.props.statchange(this.state.name);
      }

    render() {
        return(
        <div className="statbox">
            <div className="statname">{this.state.name}:</div>
            <div className="base"><textarea onChange={this.updateStat} value={this.state.base}/></div>
            <div className="modifier">{this.state.modifier}</div>
        </div>
    );}
}
export default StatBlock;