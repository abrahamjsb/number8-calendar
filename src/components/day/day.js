import React from 'react';
import PropTypes from 'prop-types';

const Day = (props) => {

    const displayDate = props.type === "gray" ? " ": props.date;
    const dayClass = "day " + props.type;

    return <div className={dayClass}>{displayDate}</div>
};

Day.propTypes = {
    type: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,

}

export default Day;