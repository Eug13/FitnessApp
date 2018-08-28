import React from 'react';
import BenchPress from './BenchPress';
import Deadlift from './Deadlift';
import Squat from './Squat';
import Start from './Start';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends React.Component{
    render(){
        return(
        <Router>
        <div>
           <Link to="/">
             Home
            </Link>
            <Link to="/BenchPress">
            BenchPress
            </Link>
            <Link to="/Deadlift">
            Deadlift
            </Link>
            <Link to="/Squat">
            Squat
            </Link>

            <Route exact path="/" component={Start}/>
            <Route path="/BenchPress" component={BenchPress}/>
            <Route path="/Deadlift" component={Deadlift}/>
            <Route path="/Squat" component={Squat}/>
  
        </div>
        </Router>
        )
    }
}

export default App;