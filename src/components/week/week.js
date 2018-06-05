import React, {Component} from 'react';
import Day from '../day/day';

class Week extends Component {
    
    render() {
        return (
            <div className='week'>
                <Day />
                <div className='day gray'></div>
                <div className='day gray'></div>
                <div className='day gray'></div>
                <div className='day gray'></div>                
                <div className='day green'>1</div>
                <div className='day weekend'>2</div>               
            </div>
        )
    }
}

export default Week;