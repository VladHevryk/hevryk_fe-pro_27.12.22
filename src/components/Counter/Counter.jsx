import React, { Component } from "react";
import Smile from "../Smile/Smile";
import Winner from "../Winner/Winner";

class Counter extends Component {
  state = {
    smiles: [
      { id: 1, value: "😭", name: "sad", count: 0 },
      { id: 2, value: "🥰", name: "love", count: 0 },
      { id: 3, value: "😇", name: "angel", count: 0 },
      { id: 4, value: "😎", name: "cool", count: 0 },
      { id: 5, value: "😱", name: "scary", count: 0 },
      { id: 6, value: "🤩", name: "stars", count: 0 },
    ],
    winner: [],
  };

  handelCount = (id) => {
    const elemenIndex = this.state.smiles.findIndex((c) => c.id === id);
    const newCount = {
      ...this.state.smiles[elemenIndex],
      count: this.state.smiles[elemenIndex].count + 1,
    };
    const newCountState = [...this.state.smiles];
    newCountState[elemenIndex] = newCount;
    this.setState({ smiles: newCountState });
  };

  handelWinner = (arr) => {
    const findWinner = arr.reduce(
      (prev, cur) => (cur.count > prev.count ? cur : prev),
      { count: 1 }
    );
    const allWiners = arr.filter((el) => el.count === findWinner.count);
    this.setState({ winner: allWiners });
  };

  render() {
    return (
      <div>
        {this.state.smiles.map((el) => (
          <Smile key={el.id} {...el} onHandelCount={this.handelCount} />
        ))}
        <Winner
          key={this.state.smiles.id}
          {...this.state}
          onHandelWinner={this.handelWinner}
        />
      </div>
    );
  }
}

export default Counter;
