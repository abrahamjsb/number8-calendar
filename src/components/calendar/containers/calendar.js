import React, {Component} from 'react';
import Month from '../../month/month';
import '../css/calendar.css';

class Calendar extends Component {

    calculateMonths() {
        
    }

    render() {
        // console.log(props)
       // const {startAt, days, countryCode} = this.props;    

        return (
            <div className='calendar-container'>
                <Month  />                                
            </div>
        )
    }
}

export default Calendar