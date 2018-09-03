import React from 'react';
import Calc from './Calc'

class Deadlift extends React.Component {
    constructor(props) {
        super(props);
        this.getDeadlift = this.getDeadlift.bind(this);

        this.state = {
            deadlift: '',
            isReady: false,
            isClean: false,
            done:''
        }
    }

    componentDidMount(){
        if (localStorage.getItem('hideInputDead')) {
            let done = JSON.parse(localStorage.getItem('hideInputDead'));
            this.setState({
                done: done
            })
        }
    }

    getDeadlift(e) {
        this.setState({
            deadlift: e.target.value
        })
    }

    calcReady() {
        this.setState({
            isReady: true,
            done:'done'
        })
        localStorage.setItem('hideInputDead', JSON.stringify('done'));
    }

    cleanStorage() {
        localStorage.setItem('dataDead', JSON.stringify(''));
        localStorage.setItem('deadDone', JSON.stringify(''));
        localStorage.setItem('hideInputDead', JSON.stringify(''));
        this.setState({
            isClean: true
        })
        window.location.reload();
    }
    render() {

        return (
            <div className='row'>
                <h2>DEADLIFT</h2>
                <input type="number" onChange={this.getDeadlift} className={this.state.done} />
                <Calc 
                deadCalc={this.state.deadlift} 
                isReady={this.state.isReady} 
                dead={'dead'}
                isCleanDead={this.state.isClean} />
               <button className={this.state.done==='done'? 'done' :'bottomb'} onClick={this.calcReady.bind(this)}>CALCULATE</button>
                <button className='red bottomb' onClick={this.cleanStorage.bind(this)}>CLEAR</button>
            </div>
        );
    }
}

export default Deadlift;