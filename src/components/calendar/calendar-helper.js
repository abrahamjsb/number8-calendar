const ONE_DAY = 86400000;
const sumDays = d => (new Date(Date.parse(d) + ONE_DAY ));
const monthComparator = (d1, d2) => (d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear());
const dateComparator = (d1, d2) => (d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate() && d1.getFullYear() === d2.getFullYear());

export const calculateMonths = (p,d,n,m) => {

    const finalDate = new Date(Date.parse(d) + (ONE_DAY * n));
    const prevDate = p;
    const currentDate = d;
    const num_days = n - 1;
    let numMonths = m;
    if(dateComparator(finalDate, currentDate)) {
        return numMonths;
    } else {

        if(!monthComparator(prevDate, currentDate)) numMonths+= 1;
        return calculateMonths(currentDate, sumDays(currentDate), num_days, numMonths);
    }
};