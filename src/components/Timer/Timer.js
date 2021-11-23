import React, { Component } from "react";
import styles from './Timer.modules.css';

class Timer extends Component {
    state = {
        hours: 0,
        min: 0,
        sec: 0,
        interval: null,
        counter: 0,
        timer: '00:00:00',
        disabled: false,
    }


    timerView = () => {
        let hoursString = this.state.hours < 10 ? '0' + this.state.hours : this.state.hours;
        let minString = this.state.min < 10 ? '0' + this.state.min : this.state.min;
        let secString = this.state.sec < 10 ? '0' + this.state.sec : this.state.sec;
        let timer = hoursString + ':' + minString + ':' + secString;
        this.setState({ timer: timer, });
    }

    calculateNextTimerValues = () => {
        this.setState(prevState => ({
            sec: prevState.sec + 1
        }))
        if (this.state.sec > 59) {
            this.setState({ sec: 0 })

            this.setState(prevState => ({
                min: prevState.min + 1
            }))
        }
        if (this.state.min > 59) {
            this.setState({ min: 0 })
            this.setState(prevState => ({
                hours: prevState.hours + 1
            }))
        }
    }

    onSecondChange = () => {
        this.calculateNextTimerValues();
        this.timerView();
    };

    onClickWait = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
        setTimeout(() => {
            if (this.state.counter >= 2) {
                clearInterval(this.state.interval);
                this.setState({ disabled: false });
                this.setState({ counter: 0 })
                // counter = 0;
            }
            else {
                this.setState({ counter: 0 })
                // counter = 0
            }
        }, 300);

    }

    onClickStart = () => {
        this.setState({ interval: setInterval(this.onSecondChange, 100) })
        this.setState({ disabled: true });
    }

    onClickReset = () => {
        clearInterval(this.state.interval);
        this.setState({ timer: '00:00:00' });
        this.setState({ disabled: false });
        this.setState({ hours: 0 });
        this.setState({ min: 0 });
        this.setState({ sec: 0 });
    }


    render() {
        return (
            <div>
                <h1>test-task "TIMER"</h1>
                <div className={styles.timer}>
                    <p data-value="timer-view"> {this.state.timer} </p>
                </div>
                <div>
                    <button id="start" onClick={this.onClickStart} disabled={this.state.disabled}><span className="styles.textBtn">Start/Stop</span></button>
                    <button id="wait" onClick={this.onClickWait} ><span className={styles.textBtn}>Wait</span></button>
                    <button id="reset" onClick={this.onClickReset}><span className={styles.textBtn}>Reset</span></button>
                </div>
            </div>
        )
    }

}

export default Timer;