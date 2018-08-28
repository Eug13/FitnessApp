import React from 'react';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.getBenchPress = this.getBenchPress.bind(this);
        this.getDeadlift = this.getDeadlift.bind(this);
        this.getSquat = this.getSquat.bind(this);
        this.state = {
            bench: [],
            dead: [],
            squat: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem('dataBench')){
                let bench = JSON.parse(localStorage.getItem('dataBench'));
                this.setState({
                   bench:bench
                })
        }

        if(localStorage.getItem('dataDead')){
            let dead = JSON.parse(localStorage.getItem('dataDead'));
            this.setState({
               dead:dead
            })
        }
        if(localStorage.getItem('dataSquat')){
            let squat = JSON.parse(localStorage.getItem('dataSquat'));
            this.setState({
               squat:squat
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isReady === true) {
            this.calculator();
        }
        if (nextProps.isCleanBench === true) {
            this.setState({
                bench:[]
             })
        }
        if (nextProps.isCleanDead === true) {
            this.setState({
                dead:[]
             })
        }
        if (nextProps.isCleanSquat === true) {
            this.setState({
                squat:[]
             })
        }
    }

    calculator() {
        let input = '';
        let bench = this.props.benchCalc;
        let dead = this.props.deadCalc;
        let squat = this.props.squatCalc;
        let key = '';
        if (bench) {
            input = Number(bench);
            key = 'bench';
        } else if (dead) {
            input = Number(dead);
            key = 'dead';
        } else if (squat) {
            input = Number(squat);
            key = 'squat';
        }
        let count = 1;
        let step = 85;
        let weight = input * 80 / 100;
        let goal = null;

        let times = Number(6);
        let rec = Number(2);
        let rutine = Number(2);
        let six = Number(6);
        let final = input * 105 / 100;
        let first = input * 80 / 100;

        const BENCH_PRESS = [];
        const DEADLIFT = [];
        const SQUAT = [];

        while (count < 5) {
            rutine++
            let obj = {
                key: key,
                count: count,
                weight: weight,
                times: times,
                rutine: rutine,
                six: six,
                rec: rec,
                final: final,
                first: first
            }
            if (obj.key === 'bench') {
                BENCH_PRESS.push(obj);
            }
            if (obj.key === 'dead') {
                DEADLIFT.push(obj);
            }
            if (obj.key === 'squat') {
                SQUAT.push(obj);
            }
            count++
        }


        while (count < 10) {
            goal = input * step / 100;
            times--
            rutine--
            let obj = {
                key: key,
                count: count,
                goal: goal,
                weight: weight,
                times: times,
                rutine: rutine,
                six: six,
                rec: rec,
                final: final,
                first: first
            }
            if (obj.key === 'bench') {
                BENCH_PRESS.push(obj);
                this.setState({
                    bench: BENCH_PRESS
                })
            }
            if (obj.key === 'dead') {
                DEADLIFT.push(obj);
                this.setState({
                    dead: DEADLIFT
                })
            }
            if (obj.key === 'squat') {
                SQUAT.push(obj);
                this.setState({
                    squat: SQUAT
                })
            }
            count++
            step += 5;
        }
       console.log('isReady!!!!!!!!')
    }


    getBenchPress() {
        if(this.state.bench.length !== 0){ localStorage.setItem('dataBench', JSON.stringify(this.state.bench)); }
        let bench = this.state.bench;
      

        if (bench) {
            return bench.map((item, index) => {
                return <div key={index} id='bencht' className='row' >
                <span className='span'>{item.count}week</span>
                <span className='span'>{item.count >= 5 ? item.goal : item.weight}</span>
                <span className='span'>{item.times}</span>
                <span className='span'>{item.rutine}</span>
                <span className='span'>{item.six}</span>
                <span className='span'>{item.final}</span>
            </div>
            })
        }
        return []
    }

    getDeadlift(){
       
        if(this.state.dead.length !== 0){ localStorage.setItem('dataDead', JSON.stringify(this.state.dead)); }
        let dead = this.state.dead;
        if (dead) {
            return dead.map((item, index) => {
                return <div key={index} id='dead' className='row' >
                <span className='span'>{item.count}week</span>
                <span className='span'>{item.count >= 5 ? item.goal : item.weight}</span>
                <span className='span'>{item.times}</span>
                <span className='span'>{item.rutine}</span>
                <span className='span'>{item.six}</span>
                <span className='span'>{item.final}</span>
            </div>
            })
        }

        return []
    }

    getSquat(){
        if(this.state.squat.length !== 0){ localStorage.setItem('dataSquat', JSON.stringify(this.state.squat)); }
        let squat = this.state.squat;

        if (squat) {
            return squat.map((item, index) => {
                return <div key={index} id='squat' className='row' >
                    <span className='span'>{item.count}week</span>
                    <span className='span'>{item.count >= 5 ? item.goal : item.weight}</span>
                    
                 {/* {  for (var i=0; i < item.times; i++) 
                          React.createElement('div', { class: 'times' }, 'Chocolate')(i)
                      
                    } */}
                   
      
                      { React.createElement('div', { className: 'times' }, 'Chocolate') }
      
                    <span className='span'>{item.times}</span>
                    <span className='span'>{item.rutine}</span>
                    <span className='span'>{item.six}</span>
                    <span className='span'>{item.final}</span>
                </div>
            })
        }
        return []
    }

    render() {
        
        const BENCH = this.getBenchPress();
        const DEADLIFT = this.getDeadlift();
        const SQUAT = this.getSquat();
        if(this.props.bench){
            return (
                <div className='row'>
                            { BENCH } 
                </div>
            );
        }
        if(this.props.dead){
            return (
                <div className='row'>
                            { DEADLIFT } 
                </div>
            );
        }
        if(this.props.squat){
            return (
                <div className='row'>
                            { SQUAT } 
                </div>
            );
        }
        return(
            <div></div>
        );
     
    }
}

export default Calc;