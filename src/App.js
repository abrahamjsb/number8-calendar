import React, { Component } from 'react';
import Calendar from './components/calendar/containers/calendar.js';
import Form from './components/calendar-form/containers/calendar-form';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Calendar />
      </div>
    );
  }
}

export default App;
