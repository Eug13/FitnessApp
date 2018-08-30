import React from 'react';
import ViewBench from './ViewBench';
import ViewDead from './ViewDead';
import ViewSquat from './ViewSquat';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.getBenchPress = this.getBenchPress.bind(this);
        this.getDeadlift = this.getDeadlift.bind(this);
        this.getSquat = this.getSquat.bind(this);
        this.state = {
            bench: [],
            dead: [],
            squat: [],
            ms:'',
            md:'',
            mb:''
        }
    }

    componentDidMount() {
        if (localStorage.getItem('dataBench')) {
            let bench = JSON.parse(localStorage.getItem('dataBench'));
            this.setState({
                bench: bench
            })
        }

        if (localStorage.getItem('dataDead')) {
            let dead = JSON.parse(localStorage.getItem('dataDead'));
            this.setState({
                dead: dead
            })
        }
        if (localStorage.getItem('dataSquat')) {
            let squat = JSON.parse(localStorage.getItem('dataSquat'));
            this.setState({
                squat: squat
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isReady === true) {
            this.calculator();
        }
        if (nextProps.isCleanBench === true) {
            this.setState({
                bench: []
            })
        }
        if (nextProps.isCleanDead === true) {
            this.setState({
                dead: []
            })
        }
        if (nextProps.isCleanSquat === true) {
            this.setState({
                squat: []
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

    markBench(){
        this.setState({
      mb:'mb'
  })
      }
  
      delBench(){
          let bench = [...this.state.bench];
          bench.shift();
          this.setState({
              bench:bench
          })
      }

    markDead(){
        this.setState({
      md:'md'
  })
      }
  
      delDead(){
          let dead = [...this.state.dead];
          dead.shift();
          this.setState({
              dead:dead
          })
      }

    markSquat(){
      this.setState({
    ms:'ms'
})
    }

    delSquat(){
        let squat = [...this.state.squat];
        squat.shift();
        this.setState({
            squat:squat
        })
    }

    getBenchPress() {
        if (this.state.bench.length !== 0) { localStorage.setItem('dataBench', JSON.stringify(this.state.bench)); }
        let item = this.state.bench[0];
        let hard = 'hard';
        // let recovery = 'recovery';

        if (item) {
            // return bench.map((item , index) => {
                return <div  id='bench' className='row' >
                <div className={this.state.mb === '' ? 'topCalc' : 'topCalc mb'}>
                    <span className='span'>{item.count} WEEK OF 9</span>
                    <span className='span'>WEIGHT OF THE WEEK :{item.count >= 5 ? item.goal : item.weight} KG</span>
                    <span className='span'>GOAL :{item.final}</span>
                </div>
                <div>
                  <h3>Hard Training :</h3> <span className='weight'> WEIGHT {item.count >= 5 ? item.goal : item.weight} KG</span>
                    <ViewBench view={item.times} times={item.rutine} hard={hard} />
                </div>
                <div>
                  <h3>Recovery Training :  </h3> <span className='weight'>WEIGHT {item.first} KG</span> 
                  <ViewBench view={item.six} times={item.rec} del={this.delBench.bind(this)} mark={this.markBench.bind(this)}/>
                </div>
            </div>
            // })
        }
        return []
    }

    getDeadlift() {

        if (this.state.dead.length !== 0) { localStorage.setItem('dataDead', JSON.stringify(this.state.dead)); }
        let item = this.state.dead[0];
        let hard = 'hard';
        if (item) {
            // return dead.map((item, index) => {
                return <div  id='dead' className='row' >
                <div className={this.state.md === '' ? 'topCalc' : 'topCalc md'}>
                    <span className='span'>{item.count} WEEK OF 9</span>
                    <span className='span'>WEIGHT OF THE WEEK :{item.count >= 5 ? item.goal : item.weight} KG</span>
                    <span className='span'>GOAL :{item.final}</span>
                </div>
                <div>
                  <h3>Hard Training :</h3> <span className='weight'> WEIGHT {item.count >= 5 ? item.goal : item.weight} KG</span>
                    <ViewDead view={item.times} times={item.rutine} hard={hard}/>
                </div>
                <div>
                  <h3>Recovery Training :  </h3> <span className='weight'>WEIGHT {item.first} KG</span> 
                  <ViewDead view={item.six} times={item.rec} del={this.delDead.bind(this)} mark={this.markDead.bind(this)}/>
                </div>
            </div>
            // })
        }

        return []
    }

    getSquat() {
        if (this.state.squat.length !== 0) { localStorage.setItem('dataSquat', JSON.stringify(this.state.squat)); }
        let item = this.state.squat[0];
        let hard = 'hard';
        // let recovery = 'recovery';

        if (item) {
            // return squat.map(item => {
                return <div  className='row' >
                    <div className={this.state.ms === '' ? 'topCalc' : 'topCalc ms'}>
                        <span className='span'>{item.count} WEEK OF 9</span>
                        <span className='span'>WEIGHT OF THE WEEK :{item.count >= 5 ? item.goal : item.weight} KG</span>
                        <span className='span'>GOAL :{item.final}</span>
                    </div>
                    <div>
                      <h3>Hard Training :</h3> <span className='weight'> WEIGHT {item.count >= 5 ? item.goal : item.weight} KG</span>
                        <ViewSquat view={item.times} times={item.rutine}   hard={hard}/>
                    </div>
                    <div>
                      <h3>Recovery Training :  </h3> <span className='weight'>WEIGHT {item.first} KG</span> 
                      <ViewSquat view={item.six} times={item.rec} del={this.delSquat.bind(this)} mark={this.markSquat.bind(this)}/>
                    </div>
                </div>
            // })
        }
        return []
    }

    render() {

        const BENCH = this.getBenchPress();
        const DEADLIFT = this.getDeadlift();
        const SQUAT = this.getSquat();
        if (this.props.bench) {
            return (
                <div className='row'>
                    {BENCH}
                </div>
            );
        }
        if (this.props.dead) {
            return (
                <div className='row'>
                    {DEADLIFT}
                </div>
            );
        }
        if (this.props.squat) {
            return (
                <div className='row'>
                    {SQUAT}
                </div>
            );
        }
        return (
            <div></div>
        );

    }
}

export default Calc;