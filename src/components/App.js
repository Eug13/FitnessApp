import React from 'react';
import BenchPress from './BenchPress';
import Deadlift from './Deadlift';
import Squat from './Squat';
import Start from './Start';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


class App extends React.Component{
    render(){
        return(
        <Router>
        <div>
           <NavLink to="/" >
             Home
            </NavLink>
            <NavLink to="/BenchPress" activeClassName="selected">
            BenchPress
            </NavLink>
            <NavLink to="/Deadlift" activeClassName="selected">
            Deadlift
            </NavLink>
            <NavLink to="/Squat" activeClassName="selected">
            Squat
            </NavLink>

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