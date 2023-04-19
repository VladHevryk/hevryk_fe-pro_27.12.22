import React, { Component } from "react";
import classes from "./Winner.module.scss";

class Winner extends Component {
  handelWinner = () => {
    this.props.onHandelWinner(this.props.smiles);
  };

  render() {
    return (
      <div className={classes.winner_block}>
        <button className={classes.winner_btn} onClick={this.handelWinner}>
          Show winner
        </button>
        {this.props.winner.map((el) => (
          <p className={classes.winner_smile} key={el.id}>the winner is - {el.value}</p>
        ))}
      </div>
    );
  }
}

export default Winner;
