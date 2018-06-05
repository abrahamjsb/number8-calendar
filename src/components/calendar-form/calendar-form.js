import React from 'react';
import './css/calendar-form.css';

const Form = (props) => {
    return(
    <form className='form-container' id="form" onSubmit={props.handleSubmit}>
        <div className='input-container'>
            <label htmlFor='start-from'>Start At:</label>
            <input type='date' id='start-from' name='start-from' format='mm/dd/yyyy'  required />
        </div>
        <div className='input-container'>
            <label htmlFor='days'>Number of days:</label>
            <input type='number' id='days' name='days'  required />
        </div>
        <div className='input-container'>
            <label htmlFor='country-code'>Country Code:</label>
            <input type='text' id='country-code' name='country-code'  pattern='/w{2}' placeholder="US" required />
        </div>
        <div className='input-container'>
            <input type='submit' className='submit-btn' value='Go!'  />
        </div>
    </form>
)
};

export default Form;