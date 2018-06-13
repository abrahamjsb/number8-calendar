import React from 'react';
import PropTypes from 'prop-types';
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
            <input type='number' id='days' name='days' min="0" max="1095"  required />
        </div>
        <div className='input-container'>
            <label htmlFor='country-code'>Country Code:</label>
            <input type='text' id='country-code' name='country-code'  pattern='^[a-z]{2}|[A-Z]{2}$' placeholder="us" required />
        </div>
        <div className='input-container'>
            <input type='submit' className='submit-btn' value='Go!'  />
        </div>
    </form>
)
};

Form.propType = {
    handleSubmit: PropTypes.func.isRequired
}

export default Form;