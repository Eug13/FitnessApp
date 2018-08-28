import React from 'react';
import Calc from './Calc'

class Squat extends React.Component {
    constructor(props) {
        super(props);
        this.getSquat = this.getSquat.bind(this);

        this.state = {
            squat: '',
            isReady: false,
            isClean: false
        }
    }

    getSquat(e) {
        this.setState({
            squat: e.target.value
        })
    }

    calcReady() {
        this.setState({
            isReady: true
        })
    }

    cleanStorage() {
        localStorage.setItem('dataSquat', JSON.stringify(''));
        this.setState({
            isClean: true
        })
    }
    render() {

        return (
            <div className='row'>
                <h2>Squat</h2>
                <input type="number" onChange={this.getSquat} />
                <Calc 
                squatCalc={this.state.squat} 
                isReady={this.state.isReady} 
                squat={'squat'} 
                isCleanSquat={this.state.isClean}
                />
                <button onClick={this.calcReady.bind(this)}>Calculate</button>
                <button onClick={this.cleanStorage.bind(this)}>Clear</button>
            </div>
        );
    }
}

export default Squat;