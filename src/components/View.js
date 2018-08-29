import React from 'react';


class View extends React.Component {
    constructor(props) {
        super(props);
        this.isCheckedHandler = this.isCheckedHandler.bind(this);

        this.state = {
            counter: 0
        }
    }


    isCheckedHandler(e) {
        let count = 0;
        count ++
        console.log(count)
        e.target.setAttribute('class', 'checked')
        // const isChecked = 'checked';
        // e.target.className = isChecked;
        // console.log(e.target)
    }
    render() {
        const view = this.props.view;
        const times = this.props.times;
        // const hard = this.props.hard;
        // const recovery = this.props.recovery;
        // if(hard){
        //     console.log(hard)
        // }
        // if(recovery){
        //     console.log(recovery)
        // }

        if (view === 6) {
            return (
                <div className='viewBox'>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                </div>
            )
        }
        if (view === 5) {
            return (
                <div className='viewBox'>
                    <span className="check">{times}</span>
                    <span className="check">{times}</span>
                    <span className="check">{times}</span>
                    <span className="check">{times}</span>
                    <span className="check">{times}</span>
                </div>
            )
        }
        if (view === 4) {
            return (
                <div className='viewBox'>
                    <span className="check">{times}</span>
                    <span className="check">{times}</span>
                    <span className="check">{times}</span>
                    <span className="check">{times}</span>
                </div>
            )
        }
        if (view === 3) {
            return (
                <div className='viewBox'>
                    <span className="check">{times}</span>
                    <span className="check">{times}</span>
                    <span className="check">{times}</span>
                </div>
            )
        }
        if (view === 2) {
            return (
                <div className='viewBox'>
                    <span className="check">{times}</span>
                    <span className="check">{times}</span>
                </div>
            )
        }
        if (view === 1) {
            return (
                <div className='viewBox'>
                    <span className="check">{times}</span>
                </div>
            )
        }




        else {
            return (
                <div></div>
            )
        }

    }
}

export default View;