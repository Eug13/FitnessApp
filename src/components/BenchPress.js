import React from 'react';
import Calc from './Calc';

class BenchPress extends React.Component {
    constructor(props) {
        super(props);
        this.getBPress = this.getBPress.bind(this);

        this.state = {
            benchPress: '',
            isReady: false,
            isClean: false,
            done:'',
        }
    }

    componentDidMount(){
        if (localStorage.getItem('hideInputBench')) {
            let done = JSON.parse(localStorage.getItem('hideInputBench'));
            this.setState({
                done: done
            })
        }
    }

    getBPress(e) {
        this.setState({
            benchPress: e.target.value
        })
    }

    calcReady() {
        this.setState({
            isReady: true,
            done:'done'
        })
        localStorage.setItem('hideInputBench', JSON.stringify('done'));
    }

    cleanStorage() {
        localStorage.setItem('dataBench', JSON.stringify(''));
        localStorage.setItem('benchDone', JSON.stringify(''));
        localStorage.setItem('hideInputBench', JSON.stringify(''));
        this.setState({
            isClean: true
        })
        window.location.reload();
    }

    render() {
        return (
            <div className='row'>
                <h2>BENCH PRESS</h2>
                <input type="number" name='bp' className={this.state.done} onChange={this.getBPress} />
                <Calc
                    benchCalc={this.state.benchPress}
                    isReady={this.state.isReady}
                    bench={'bench'}
                    isCleanBench={this.state.isClean} />
                <button className={this.state.done==='done'? 'done' :'bottomb'} onClick={this.calcReady.bind(this)}>CALCULATE</button>
                <button className='red bottomb' onClick={this.cleanStorage.bind(this)}>CLEAR</button>
            </div>
        );
    }
}

export default BenchPress;