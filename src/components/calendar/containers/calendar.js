import React, {Component} from 'react';
import Month from '../../month/month';
import  {calculateMonths} from '../calendar-helper';
import '../css/calendar.css';

class Calendar extends Component {

    render() {

       const {startAt, days, countryCode} = this.props; 
       const begin = new Date(startAt); 
       const numMonths = calculateMonths(begin, begin, days);

        return (
            <div className='calendar-container'>  
             {numMonths.map(v => (<Month key={v.monthId} {...v} /> ))} 
            </div>
        )
    }
}

export default Calendar