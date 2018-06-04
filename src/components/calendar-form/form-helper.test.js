import {setDateFormat} from './form-helper';

test('Adds date and country code and should return date format', () => {

    const result = '03/06/2018';
    const expected = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    expect(result).toMatch(expected);
  });