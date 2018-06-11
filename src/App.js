import React, { Component } from 'react';
import Calendar from './components/calendar/containers/calendar.js';
import Form from './components/calendar-form/calendar-form';
import {setDateFormat, validateForm} from './components/calendar-form/form-helper';

class App extends Component {

  state = {
    startAt: '06/10/2018',
    days: 100,
    countryCode: 'us'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const formData = e.target;
    // const validate = validateForm(formData);
    // const newDate = setDateFormat(new Date(d), c);
    // this.setState({startAt:newDate, 
    //                days:parseInt(n, 10),
    //                countryCode: c});

  }

  render() {
    return (
      <div>
        <Form  handleSubmit={this.handleSubmit} />
        <Calendar  {...this.state} />
      </div>
    );
  }
}

export default App;
