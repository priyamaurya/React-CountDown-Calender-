import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';
var Button = require('react-bootstrap').Button;
var Form = require('react-bootstrap').Form;
var FormControl = require('react-bootstrap').FormControl;

class App extends Component {

    constructor(props){
      super(props); 
      this.state={
        deadline : 'Decemeber 25, 2017', 
        newDeadLine: ''
      }
      
    }

changeDeadLine(){
  this.setState({deadline: this.state.newDeadLine});
}

  render() {
    return (
     <div className="app">
    <div className="App-title">Countdown Champ  {this.state.deadline}</div>
      <Clock deadline={this.state.deadline}/>
    <Form inline >
       <FormControl className="deadline-input" type="text" value={this.state.newDeadLine} onChange={event=>this.setState({newDeadLine:event.target.value})}/>
       <Button className="btn btn-primary" onClick={()=>this.changeDeadLine()}>Submit</Button>
     </Form>
    </div>
    );
  }
}

export default App;
