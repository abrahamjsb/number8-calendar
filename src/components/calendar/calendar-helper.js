import {setDateFormat} from '../calendar-form/form-helper';

// constant: days in miliseconds
const ONE_DAY = 86400000;

// sum one or more days to a current date
export const sumDays = (d, n) => {
    const days = typeof n === 'number' ? n * ONE_DAY: ONE_DAY;
    return new Date(Date.parse(d) + days )
};

// compares the months beetween two dates
const monthComparator = (d1, d2) => (d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear());

// compares if two dates are the same
const dateComparator = (d1, d2) => (d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate() && d1.getFullYear() === d2.getFullYear());

// return month name by introducing its id
export const getMonthName = (id) => {
    const monthNames = ["Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[id];
}

// return day name by introducing its id
export const getDayName = (id) => {
    const dayNames = ["Sun", "Mon", "Tus", "Wed", "Thu","Fri","Sat"];
    return dayNames[id];
}


// return an array of months from the starting date to last
export const calculateMonths = (p,d,n,m) => {

    
    const finalDate = new Date(Date.parse(d) + (ONE_DAY * n));
    const prevDate = p;
    const currentDate = d;
    const num_days = n - 1;
    let startAt = d;
    const arrMonths = m || [];
    if(dateComparator(finalDate, currentDate)) {
        arrMonths.push({monthId: currentDate.getMonth(), year: currentDate.getFullYear(), end: setDateFormat(currentDate)})
        return arrMonths;
    } else {

        if(!monthComparator(prevDate, currentDate)) {
            arrMonths.push({monthId: prevDate.getMonth(), year: prevDate.getFullYear(), end: setDateFormat(prevDate)});
        }
        return calculateMonths(currentDate, sumDays(currentDate), num_days, arrMonths);
    }
};

// calculate days of months
export const calculateDays = (id, end, start) => {

    const finalValidDate = end; 
    const year = finalValidDate.getFullYear();
    const startValidDate = monthComparator(end, start) ? start : new Date(year, id, 1); 
    console.log(startValidDate);
    const finalWeek = getFinalWeek(finalValidDate); 
    let currentDate = getBeginWeek(startValidDate); 
    const days = [];
    let cont = 1;
    while(!dateComparator(currentDate,finalWeek)) {
        if(dateIsBeetween(currentDate, startValidDate, finalValidDate)){
            if(getDayName(currentDate.getDay()) === "Sun" || getDayName(currentDate.getDay()) === "Sat"){
            
                days.push({id:cont, type:"weekend", day:currentDate.getDay(), date: currentDate.getDate()});
                cont += 1;
                currentDate = sumDays(currentDate);
                
            } else {
                
                days.push({id:cont, type:"green", day:currentDate.getDay(), date: currentDate.getDate()});
                cont += 1;
                currentDate = sumDays(currentDate);
            }
        } else {
            
            days.push({id:cont, type:"gray", day:currentDate.getDay(), date: currentDate.getDate()});
            cont += 1;
            currentDate = sumDays(currentDate);
        }
    }
    
    return days;
};

const dateIsBeetween = (c,s,e) => {
    let isBeeetween = true;
    if(c.getMonth() !== s.getMonth() || c.getDate() < s.getDate() || c.getMonth() !== e.getMonth() || c.getDate() > e.getDate() ) isBeeetween = false;
    return isBeeetween;
}
const getBeginWeek = d => (new Date(d.getFullYear(), d.getMonth(), (d.getDate()-d.getDay())));
const getFinalWeek = d => {
    const difference = (6 - d.getDay()) + 1;
    return sumDays(d, difference);
};
