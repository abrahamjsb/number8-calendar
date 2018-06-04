import React, {Component} from 'react';
import Month from '../../month/month';
import '../css/calendar.css';


class Calendar extends Component {

    render() {
        return (
            <div className='calendar-container'>
                <Month />                                
            </div>
        )
    }
}

export default Calendar