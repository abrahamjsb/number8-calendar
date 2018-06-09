import React, {Component} from 'react';
import Month from '../../month/month';
import  {calculateMonths} from '../calendar-helper';
import '../css/calendar.css';

class Calendar extends Component {

    render() {

       const {startAt, days, countryCode} = this.props;  
       const numMonths = calculateMonths(startAt, startAt, days);

        return (
            <div className='calendar-container'>  
             {numMonths.map(v => (<Month key={v.monthId} {...v} /> ))} 
            </div>
        )
    }
}

export default Calendar