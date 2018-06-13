import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getMonthName, calculateDays} from '../calendar/calendar-helper';
import Day from '../day/day.js';
import './month.css';

class Month extends Component {

 state = {
     days:[]
 }

 componentWillMount() {
    
} 

componentDidMount() {
    fetch('https://holidayapi.com/v1/holidays?key=a3c70ca7-44d4-4197-aca2-8bada3e972e4&country='+this.props.code+'&month='+(this.props.id+1))
    .then(response => (response.json()))
    .then(data => {
        const holidays = Object.values(data.holidays);
        this.setState({
            days: holidays
        })
    })
}
 render(){ 
    const days = calculateDays(this.props.monthId, new Date(this.props.end), new Date(this.props.start) );
     
     return ( 
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
                <div className='month-year'>{getMonthName(this.props.monthId)}, {this.props.year}</div>
            </div>        
            <div className='month-body'>
                {days.map(day =><Day key={day.id} {...day} />)}            
            </div>
        </div>)
 }
}

Month.propTypes = {
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    monthId: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired

}

export default Month;