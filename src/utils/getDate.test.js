import {getDate} from './getDate';
import {fakeOrders} from '../mock/fakeOrders';

describe('getDate function', () => {
	it('works correctly', () => {
        const order = fakeOrders[1];
        const result = getDate(order.date);
        const expectedResult = '13 марта, ср, 2019 год';
		expect(result).toEqual(expectedResult);
    });
    
    it('has empty string as date', () => {
        const result = getDate('');
        const expectedResult = 'NaN undefined, undefined, NaN год';
		expect(result).toEqual(expectedResult);
    });
    
    it('has empty object as date', () => {
        const result = getDate({});
        const expectedResult = 'NaN undefined, undefined, NaN год';
		expect(result).toEqual(expectedResult);
    });
    
    it('has invalid timestamp as date', () => {
        const result = getDate('123456789');
        const expectedResult = 'NaN undefined, undefined, NaN год';
		expect(result).toEqual(expectedResult);
	});
});