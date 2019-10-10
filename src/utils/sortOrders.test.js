import React from 'react'
import {sortByItemCount, sortOrders, sortTypes, sortByItemNames, sortByDate} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are undef', () => {
		const result = sortByItemCount(undefined, undefined);
		expect(result).toEqual(0);
	});

	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});
});

describe('sortOrders function', () => {
	it('orders are null', () => {
		const result = sortOrders(null, null);
		expect(result).toEqual(false);
	});

	it('orders are empty array', () => {
		const result = sortOrders([], sortTypes);
		expect(result).toEqual(false);
	});

	it('orders are empty objects', () => {
		const result = sortOrders({}, sortTypes);
		expect(result).toEqual(false);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(undefined, undefined);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});
});

describe('sortByItemNames function', () => {
	it('orders are undef', () => {
		const result = sortByItemNames(undefined, undefined);
		expect(result).toEqual(0);
	});

	it('orders are false', () => {
		const result = sortByItemNames({items: [false]}, {items: [false]});
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});

	it('null items', () => {
		const order1 = {
			items: [null, 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});
});
