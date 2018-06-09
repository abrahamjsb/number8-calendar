import {dateComparator, monthComparator, calculateMonths, sumDays} from './calendar-helper'; 
import {setDateFormat} from '../calendar-form/form-helper';

// test('It process two dates and return if this dates are from the same month', () => {

//     const result = monthComparator(new Date(), sumDays(new Date()));
//     const expected = true;

//     expect(result).toBe(expected);

// });

// test('It process two dates and return if this dates are from the same month', () => {

//     const result = dateComparator(new Date(), new Date());
//     const expected = true;

//     expect(result).toBe(expected);

// });

test('It process num of days and start from date and return the cantity of months to display', () => {

    const result = calculateMonths(new Date(), new Date(), 30); // 08/06/18 13 = 1
    const expected = [{monthId: 5, year:2018}, {monthId: 6, year:2018}];

    expect(result).toEqual(expected);

}); 