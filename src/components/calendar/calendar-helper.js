import {setDateFormat} from '../calendar-form/form-helper';

const ONE_DAY = 86400000;
export const sumDays = (d, n) => {
    const days = typeof n === 'number' ? n * ONE_DAY: ONE_DAY;
    return new Date(Date.parse(d) + days )
};

const monthComparator = (d1, d2) => (d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear());
const dateComparator = (d1, d2) => (d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate() && d1.getFullYear() === d2.getFullYear());

export const getMonthName = (id) => {
    const monthNames = ["Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[id];
}

export const calculateMonths = (p,d,n,m) => {

    
    const finalDate = new Date(Date.parse(d) + (ONE_DAY * n));
    const prevDate = p;
    const currentDate = d;
    const num_days = n - 1;
    let startAt = d;
    const arrMonths = m || [{monthId:prevDate.getMonth(), year:prevDate.getFullYear()}];
    if(dateComparator(finalDate, currentDate)) {
        return arrMonths;
    } else {

        if(!monthComparator(prevDate, currentDate)) {
            arrMonths.push({monthId: currentDate.getMonth(), year: currentDate.getFullYear()});
        }
        return calculateMonths(currentDate, sumDays(currentDate), num_days, arrMonths);
    }
};