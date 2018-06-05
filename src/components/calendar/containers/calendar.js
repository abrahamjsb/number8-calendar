import React, {Component} from 'react';
import Month from '../../month/month';
import '../css/calendar.css';

const one_day = 86400000;

class Calendar extends Component {
    render() {
        // console.log(props)
        const {startAt, days, countryCode} = props;    

        return (
            <div className='calendar-container'>
                <Month  />                                
            </div>
        )
    }
}

export default Calendar