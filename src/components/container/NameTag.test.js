import React from 'react';
import { shallow } from 'enzyme';
import NameTag from './NameTag';

describe('NameTag Test', () => {
  it('renders NameTag', () => {
    const wrapper = shallow(<NameTag />);
    expect(wrapper).toMatchSnapshot();
  });
});
