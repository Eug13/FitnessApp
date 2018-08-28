import React from 'react';
import Calc from './Calc';

class BenchPress extends React.Component {
    constructor(props) {
        super(props);
        this.getBPress = this.getBPress.bind(this);

        this.state = {
            benchPress: '',
            isReady: false,
            isClean: false
        }
    }

    getBPress(e) {
        this.setState({
            benchPress: e.target.value
        })
    }

    calcReady() {
        this.setState({
            isReady: true
        })
    }

    cleanStorage() {
        localStorage.setItem('dataBench', JSON.stringify(''));
        this.setState({
            isClean: true
        })
    }

    render() {
        return (
            <div>
                <h2>Bench Press</h2>
                <input type="number" onChange={this.getBPress} />
                <Calc
                    benchCalc={this.state.benchPress}
                    isReady={this.state.isReady}
                    bench={'bench'}
                    isCleanBench={this.state.isClean} />
                <button onClick={this.calcReady.bind(this)}>Calculate</button>
                <button onClick={this.cleanStorage.bind(this)}>Clear</button>
            </div>
        );
    }
}

export default BenchPress;