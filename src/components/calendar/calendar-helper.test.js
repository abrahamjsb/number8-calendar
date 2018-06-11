import {dateComparator, monthComparator, calculateMonths, sumDays, calculateDays} from './calendar-helper'; 
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

// test('It process num of days and start from date and return the cantity of months to display', () => {

//     const result = calculateMonths(new Date(), new Date(), 30); // 08/06/18 13 = 1
//     const expected = [{monthId: 5, year:2018, end:'06/30/2018'}, {monthId: 6, year:2018, end:'07/10/2018'}];

//     expect(result).toEqual(expected);

// }); 

test('It process a month id, end date, start date and return an array of days', () => {

    const result = calculateDays(5, new Date('06/14/2018'), new Date('06/08/2018') ); // 08/06/18 13 = 1
    const expected = [{id:1, type:'gray', day:0, date:3 }, {id:2, type:'gray', day:1, date:4 }, {id:3, type:'gray', day:2, date:5 },
                      {id:4, type:'gray', day:3, date:6 },{id:5, type:'gray', day:4, date:7 }, {id:6, type:'green', day:5, date:8},
                      {id:7, type:'weekend', day:6, date:9 }, {id:8, type:'weekend', day:0, date:10 }, {id:9, type:'green', day:1, date:11 },
                      {id:10, type:'green', day:2, date:12 }, {id:11, type:'green', day:3, date:13 }, {id:12, type:'green', day:4, date:14 },
                      {id:13, type:'gray', day:5, date:15 },{id:14, type:'gray', day:6, date:16 }];

    expect(result).toEqual(expected);

}); 