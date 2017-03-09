import React, { Component } from 'react';
import './App.css';

export default class Clock extends Component {
	constructor(props){
		super(props);
		this.state={
			days: 0,
			seconds:0,
			minutes:0,
			hours:0
		}
	}

	componentWillMount(){
		//before component first renders
		this.getClockValues(this.props.deadline);
	}

	componentDidMount(){
		//when component already rendered
		setInterval(()=>this.getClockValues(this.props.deadline), 1000);
	}

	getClockValues(deadline){
		const time = Date.parse(deadline) - Date.parse(new Date()); 
		const seconds = Math.floor((time/1000) % 60);
		const minutes = Math.floor((time/1000/60) % 60);
		const hours = Math.floor(time/(1000*60*60) % 24);
		const days = Math.floor(time/(1000*60*60*24));

		this.setState({days,seconds,minutes,hours});
	}

	render() {
		return (
			<div>
				 <div className="Clock-days"> {this.state.days} days</div>
				 <div className="Clock-days"> {this.state.hours} hours</div>
				 <div className="Clock-days"> {this.state.minutes} minutes</div>
				 <div className="Clock-days"> {this.state.seconds} seconds</div>

   				
			</div>
		);
	}
}
