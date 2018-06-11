import React from 'react';
import {getMonthName, calculateDays} from '../calendar/calendar-helper';
import Week from '../week/week.js';
import './month.css';

const days = calculateDays(5, new Date('06/14/2018'), new Date('06/08/2018') );
      console.log(days);
const Month = (props) => (

    <div className='month-container'>
        <div className='month-header'>
            <div className='days'>
                <div className='day-legend'>S</div>
                <div className='day-legend'>M</div>
                <div className='day-legend'>T</div>
                <div className='day-legend'>W</div>
                <div className='day-legend'>T</div>
                <div className='day-legend'>F</div>
                <div className='day-legend'>S</div>
            </div>
            <div className='month-year'>{getMonthName(props.monthId)}, {props.year}</div>
        </div>        
        <div className='month-body'>
            <Week />
            <Week />
            <Week />            
        </div>
    </div>
)

export default Month;