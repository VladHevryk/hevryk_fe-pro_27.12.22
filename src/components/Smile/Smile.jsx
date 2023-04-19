import React, { Component } from "react";
import style from "./Smile.module.scss";

class Smile extends Component {
  handelCount = () => {
    this.props.onHandelCount(this.props.id);
  };

  render() {
    return (
      <>
        <div className={style.smile_container}>
          <button className={style.smile_btn} onClick={this.handelCount}>
            {this.props.value}
          </button>
          <p className={style.smile_title}>{this.props.name}</p>
          <h1 className={style.smile_count}>{this.props.count}</h1>
        </div>
      </>
    );
  }
}

export default Smile;
