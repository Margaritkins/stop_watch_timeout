import React, { Component } from "react";
import styles from "./StopWatchTimeout.module.css";

class StopWatchTimeout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.timeoutID = null;
  }

  // tick = () => {
  //   const { time } = this.state;
  //   const newTime = new Date(time);
  //   newTime.setSeconds(newTime.getSeconds() + 1);
  //   this.setState({ time: newTime });
  // };

  // function updator - good practice to use instead simple tick ^
  tick=()=>{
    this.setState((state, props)=>{
      const { time } = state;
  const newTime = new Date(time);
  newTime.setSeconds(newTime.getSeconds()+1);
  return {time: newTime};
    })
  };

  start = () => {
    if (this.timeoutID === null) {
      this.timeoutID = setTimeout(this.tick, 1000);
    }
  };

  stop = () => {
    clearTimeout(this.timeoutID);
    this.timeoutID = null;
  };

  reset = () => {
    // if (this.timeoutID !== null) {
    clearTimeout(this.timeoutID);
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
    // this.stop();
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time !== this.state.time) console.log(this.state.time);
    {
      this.timeoutID = setTimeout(this.tick, 1000);
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { time } = this.state;
    return (
      <article className={styles.wrapper}>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <div>
          <button className={styles.btn} onClick={this.start}>
            Start
          </button>
          <button className={styles.btn} onClick={this.reset}>
            Reset
          </button>
          <button className={styles.btn} onClick={this.stop}>
            Stop
          </button>
        </div>
      </article>
    );
  }
}

export default StopWatchTimeout;
