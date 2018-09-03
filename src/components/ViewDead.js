import React from 'react';


class ViewDead extends React.Component {
    constructor(props) {
        super(props);
        this.isCheckedHandler = this.isCheckedHandler.bind(this);
        this.isDelete = this.isDelete.bind(this);

        this.state = {
            counter: 0,
            dead: '',
            weekend: '',
            message:''
        }
    }

    componentDidMount() {
        if (localStorage.getItem('deadDone')) {
            let dead = JSON.parse(localStorage.getItem('deadDone'));
            this.setState({
                dead: dead
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.dead !== this.state.dead) {
            localStorage.setItem('deadDone', JSON.stringify(this.state.dead));
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
                    localStorage.setItem('dataDead', JSON.stringify(''));
                    localStorage.setItem('deadDone', JSON.stringify(''));
                    localStorage.setItem('hideInputDead', JSON.stringify(''));
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
                    dead: 'done'
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
                    dead: 'done'
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
                    dead: 'done'
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
                    dead: 'done'
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
                    dead: 'done'
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
                    dead: 'done'
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
            dead: ''
        })
        this.props.del();
        localStorage.setItem('deadDone', JSON.stringify(this.state.dead));
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
                    <div className={this.state.dead === 'done' ? 'done' : 'viewBox'} >
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
                        <span className={this.state.message !== '' ? 'done':'checked red btn'} style={this.state.weekend === 'done'?{display:'inline-block'}:{display: 'none'}}
                        onClick={this.isDelete}>{this.state.message !==''?'':'DONE'}</span>
                        </div>       
            )
        }
        if (view === 5) {
            return (
                <div className={this.state.dead === 'done' ? 'done' : 'viewBox'}>
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
                <div className={this.state.dead === 'done' ? 'done' : 'viewBox'}>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                </div>
            )
        }
        if (view === 3) {
            return (
                <div className={this.state.dead === 'done' ? 'done' : 'viewBox'}>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                </div>
            )
        }
        if (view === 2) {
            return (
                <div className={this.state.dead === 'done' ? 'done' : 'viewBox'}>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                    <span className="check" onClick={this.isCheckedHandler}>{times}</span>
                </div>
            )
        }
        if (view === 1) {
            return (
                <div className={this.state.dead === 'done' ? 'done' : 'viewBox'}>
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

export default ViewDead;