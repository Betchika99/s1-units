import React from 'react';
import Order from './Order';
import {fakeOrders} from '../mock/fakeOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Order component', () => {
    const order = fakeOrders[0];
    const component = shallow(<Order key={0} order={order}/>);

    it('smoke test for render one component', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

    it('render component with invalid items order', () => {
        const failOrder = {
            id: 123,
		    date: 1544356800000,
		    shop: 'Ali Express',
            items: []
        };
        component.setProps({ key: 0, order: failOrder });
        expect(toJson(component)).toMatchSnapshot();
    });

    it('render component with invalid date order', () => {
        const failOrder = {
            id: 123,
		    date: null,
		    shop: 'Ali Express',
            items: [
                'Утиный пластмасса для показ новый год',
			    'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
			    'Новый стиль один розница яйцо для упаковки форма латекс',
            ]
        };
        component.setProps({ key: 0, order: failOrder });
        expect(toJson(component)).toMatchSnapshot();
    });

    it('items in order expected', () => {
        const failOrder = {
            id: 123,
		    date: 1544356800000,
		    shop: 'Ali Express',
            items: []
        };
        const failComponent = shallow(<Order key={0} order={failOrder}/>);
        expect(failComponent).toEqual({});
    });

    it('component has two spans', () => {
        const spanCount = 2;
        expect(component.find('span')).toHaveLength(spanCount);
    });

    it('render date correctly', () => {
        const wrapper = shallow(<Order key={0} order={order}/>);
        expect(wrapper.containsMatchingElement(<span>9 декабря, вс, 2018 год</span>)).toEqual(true);
    });

    it('render date incorrectly', () => {
        // Bug in function getDate
        const failOrder = {
            id: 123,
		    date: undefined,
		    shop: 'Ali Express',
            items: []
        };
        const failComponent = shallow(<Order key={0} order={failOrder}/>);
        expect(failComponent.find('div.Order-header').childAt(1).html()).toEqual('<span>NaN undefined, undefined, NaN год</span>');
    });
});