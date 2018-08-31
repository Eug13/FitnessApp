import React from 'react';


class ViewBench extends React.Component {
    constructor(props) {
        super(props);
        this.isCheckedHandler = this.isCheckedHandler.bind(this);
        this.isDelete = this.isDelete.bind(this);

        this.state = {
            counter: 0,
            bench: '',
            weekend: '',
            message:''
        }
    }

    componentDidMount() {
        if (localStorage.getItem('benchDone')) {
            let bench = JSON.parse(localStorage.getItem('benchDone'));
            this.setState({
                bench: bench
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.bench !== this.state.bench) {
            localStorage.setItem('benchDone', JSON.stringify(this.state.bench));
        }
    }

    isCheckedHandler(e) {
        const view = this.props.view;
        const final = this.props.final;
        if (view === 6 && final === 9) {
            this.setState({
                counter: this.state.counter + 1
            })
            e.target.setAttribute('class', 'checked')
            if (this.state.counter === 5) {
                this.setState({
                    message: 'Congratulations your POWER is increased !'
                })
                setTimeout(()=>{
                    localStorage.setItem('dataBench', JSON.stringify(''));
                    localStorage.setItem('benchDone', JSON.stringify(''));
                    window.location.reload();
                }  
               ,3000)
            }
        }


        if (view === 6) {
            this.setState({
                counter: this.state.counter + 1
            })
            e.target.setAttribute('class', 'checked')
            if (this.state.counter === 5) {
                this.setState({
                    bench: 'done'
                })
            }
        }
        if (view === 5) {
            this.setState({
                counter: this.state.counter + 1
            })
            e.target.setAttribute('class', 'checked')
            if (this.state.counter === 4) {
                this.setState({
                    bench: 'done'
                })
            }
        }
        if (view === 4) {
            this.setState({
                counter: this.state.counter + 1
            })
            e.target.setAttribute('class', 'checked')
            if (this.state.counter === 3) {
                this.setState({
                    bench: 'done'
                })
            }
        }
        if (view === 3) {
            this.setState({
                counter: this.state.counter + 1
            })
            e.target.setAttribute('class', 'checked')
            if (this.state.counter === 2) {
                this.setState({
                    bench: 'done'
                })
            }
        }
        if (view === 2) {
            this.setState({
                counter: this.state.counter + 1
            })
            e.target.setAttribute('class', 'checked')
            if (this.state.counter === 1) {
                this.setState({
                    bench: 'done'
                })
            }
        }
        if (view === 1) {
            this.setState({
                counter: this.state.counter + 1
            })
            e.target.setAttribute('class', 'checked')
            if (this.state.counter === 0) {
                this.setState({
                    bench: 'done'
                })
            }
        }

        if (e.target.id) {
            console.log('wooohooo')
            this.setState({
                weekend: 'done'
            })
            this.props.mark();

        }
    }

    isDelete() {
        this.setState({
            bench: ''
        })
        this.props.del();
        localStorage.setItem('benchDone', JSON.stringify(this.state.bench));
        window.location.reload();
        if (this.props.view === 1) { localStorage.clear(); }
    }



    render() {
        const view = this.props.view;
        const times = this.props.times;
        const hard = this.props.hard;

        if (view === 6) {
            if (hard) {
                return (
                    <div className={this.state.bench === 'done' ? 'done' : 'viewBox'} >
                        <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                        <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                        <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                        <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                        <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                        <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    </div>
                )
            }
            return (
                    <div className='viewBox'>
                        <span className={this.state.message !== '' ? 'done' : 'check'} onClick={this.isCheckedHandler}>{times}</span>
                        <span className={this.state.message !== '' ? 'done' : 'check'} onClick={this.isCheckedHandler}>{times}</span>
                        <span className={this.state.message !== '' ? 'done' : 'check'} onClick={this.isCheckedHandler}>{times}</span>
                        <span className={this.state.message !== '' ? 'done' : 'check'} onClick={this.isCheckedHandler}>{times}</span>
                        <span className={this.state.message !== '' ? 'done' : 'check'} onClick={this.isCheckedHandler}>{times}</span>
                        <span className={this.state.message !== '' ? 'checked' : 'check'} id="last" onClick={this.isCheckedHandler}>{this.state.message !== '' ? this.state.message : times}</span>
                        <span className={this.state.message !== '' ? 'done':'checked red'} style={this.state.weekend === 'done'?{display:'inline'}:{display: 'none'}}
                        onClick={this.isDelete}>{this.state.message !==''?'':'DONE'}</span>
                        </div>       
            )
        }
        if (view === 5) {
            return (
                <div className={this.state.bench === 'done' ? 'done' : 'viewBox'}>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                </div>
            )
        }
        if (view === 4) {
            return (
                <div className={this.state.bench === 'done' ? 'done' : 'viewBox'}>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                </div>
            )
        }
        if (view === 3) {
            return (
                <div className={this.state.bench === 'done' ? 'done' : 'viewBox'}>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                </div>
            )
        }
        if (view === 2) {
            return (
                <div className={this.state.bench === 'done' ? 'done' : 'viewBox'}>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                </div>
            )
        }
        if (view === 1) {
            return (
                <div className={this.state.bench === 'done' ? 'done' : 'viewBox'}>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
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

export default ViewBench;