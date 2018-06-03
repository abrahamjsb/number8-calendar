import React from 'react';
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
            <div className='week'>
                <div className='day gray'></div>
                <div className='day gray'></div>
                <div className='day gray'></div>
                <div className='day gray'></div>
                <div className='day gray'></div>                
                <div className='day green'>1</div>
                <div className='day weekend'>2</div>               
            </div>
            <div className='week'>
                <div className='day weekend'>3</div>
                <div className='day green'>4</div>
                <div className='day green'>5</div>
                <div className='day green'>6</div>
                <div className='day green'>7</div>
                <div className='day green'>8</div>                
                <div className='day weekend'>9</div>                 
            </div>
            <div className='week'>
                <div className='day weekend'>10</div>
                <div className='day green'>11</div>
                <div className='day green'>12</div>
                <div className='day green'>13</div>
                <div className='day gray'></div>
                <div className='day gray'></div>                
                <div className='day gray'></div>
            </div>
        </div>
    </div>
)

export default Month;