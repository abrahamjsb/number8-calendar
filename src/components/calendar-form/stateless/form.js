import React from 'react';
import '../css/calendar-form.css';

const Form = () => (
    <div className='form-container'>
        <div className='input-container'>
            <label for='start-from'>Start At:</label>
            <input type='date' id='start-from' name='start-from' format='mm/dd/yyyy' />
        </div>
        <div className='input-container'>
            <label for='days'>Number of days:</label>
            <input type='number' id='days' name='days' />
        </div>
        <div className='input-container'>
            <label for='country-code'>Country Code:</label>
            <input type='text' id='country-code' name='country-code' />
        </div>
    </div>
);

export default Form;