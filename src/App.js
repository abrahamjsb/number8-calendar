import React, { Component } from 'react';
import Calendar from './components/calendar/containers/calendar.js';
import Form from './components/calendar-form/calendar-form';
import {setDateFormat, validateForm} from './components/calendar-form/form-helper';
import './App.css';

class App extends Component {

  state = {
    startAt: '',
    days: 100,
    countryCode: '',
    available: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;
    
    if(!e.target['start-from'].value){this.setState({available:false}); return false;} 
    if(!e.target['days'].value) {this.setState({available:false}); return false;} 
    if(!e.target['country-code'].value) {this.setState({available:false}); return false;} 

    this.setState({startAt:e.target['start-from'].value.replace(/-/g, "/"), days:e.target['days'].value, countryCode:e.target['country-code'].value.toUpperCase(), available:true });
    

  }

  render() {
    const showCalendar = this.state.available ? <Calendar  {...this.state} /> : <h1 className="main-title">Nothing to see here..</h1>;
    return (
      <div>
        <Form  handleSubmit={this.handleSubmit} />
        {showCalendar}
      </div>
    );
  }
}

export default App;
