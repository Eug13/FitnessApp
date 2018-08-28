import React from 'react';
import BenchPress from './BenchPress';
import Deadlift from './Deadlift';
import Squat from './Squat';
import '../styles.css';

class App extends React.Component{
    render(){
        return(
        <div>
            <h1>Here MY OWN REACT STUFF!</h1>
            <BenchPress/>
            <Deadlift/>
            <Squat/>
        </div>
        )
    }
}

export default App;