import React from 'react';
import Week from '../week/week.js';
import './month.css';

const Month = () => (

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
            <div className='month-year'>Jun 2018</div>
        </div>        
        <div className='month-body'>
            <Week />
            <Week />
            <Week />            
        </div>
    </div>
)

export default Month;