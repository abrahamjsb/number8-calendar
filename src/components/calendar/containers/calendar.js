import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Month from '../../month/month';
import  {calculateMonths} from '../calendar-helper';
import '../css/calendar.css';

const Calendar = (props) => {

       const {startAt, days, countryCode} = props; 
       const begin = new Date(startAt); 
       const numMonths = calculateMonths(begin, begin, days);

        return (
            <div className='calendar-container'>  
             {numMonths.map(v => (<Month start={startAt} key={v.monthId} code={countryCode} {...v} /> ))} 
            </div>
        )
    
}

Calendar.propType = {
    startAt: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    countryCode: PropTypes.string.isRequired
}

export default Calendar