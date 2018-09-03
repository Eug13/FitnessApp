import React from 'react';
import Calc from './Calc'

class Squat extends React.Component {
    constructor(props) {
        super(props);
        this.getSquat = this.getSquat.bind(this);

        this.state = {
            squat: '',
            isReady: false,
            isClean: false,
            done:''
        }
    }


    componentDidMount(){
        if (localStorage.getItem('hideInputSquat')) {
            let done = JSON.parse(localStorage.getItem('hideInputSquat'));
            this.setState({
                done: done
            })
        }
    }

    getSquat(e) {
        this.setState({
            squat: e.target.value
        })
    }

    calcReady() {
        this.setState({
            isReady: true,
            done:'done'
        })
        localStorage.setItem('hideInputSquat', JSON.stringify('done'));
    }

    cleanStorage() {
        localStorage.setItem('dataSquat', JSON.stringify(''));
        localStorage.setItem('squatDone', JSON.stringify(''));
        localStorage.setItem('hideInputSquat', JSON.stringify(''));
        this.setState({
            isClean: true
        })
        window.location.reload();
    }
    render() {

        return (
            <div className='row'>
                <h2>SQUAT</h2>
                <input type="number" onChange={this.getSquat}   className={this.state.done}/>
                <Calc 
                squatCalc={this.state.squat} 
                isReady={this.state.isReady} 
                squat={'squat'} 
                isCleanSquat={this.state.isClean}
                />
                <button className={this.state.done==='done'? 'done' :'bottomb'} onClick={this.calcReady.bind(this)}>CALCULATE</button>
                <button className='red bottomb' onClick={this.cleanStorage.bind(this)}>CLEAR</button>
            </div>
        );
    }
}

export default Squat;