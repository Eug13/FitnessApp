import React from 'react';
import Calc from './Calc'

class Deadlift extends React.Component {
    constructor(props) {
        super(props);
        this.getDeadlift = this.getDeadlift.bind(this);

        this.state = {
            deadlift: '',
            isReady: false,
            isClean: false
        }
    }

    getDeadlift(e) {
        this.setState({
            deadlift: e.target.value
        })
    }

    calcReady() {
        this.setState({
            isReady: true
        })
    }

    cleanStorage() {
        localStorage.setItem('dataDead', JSON.stringify(''));
        this.setState({
            isClean: true
        })
    }
    render() {

        return (
            <div>
                <h2>DeadLift</h2>
                <input type="number" onChange={this.getDeadlift} />
                <Calc 
                deadCalc={this.state.deadlift} 
                isReady={this.state.isReady} 
                dead={'dead'}
                isCleanDead={this.state.isClean} />
                <button onClick={this.calcReady.bind(this)}>Calculate</button>
                <button onClick={this.cleanStorage.bind(this)}>Clear</button>
            </div>
        );
    }
}

export default Deadlift;