import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { Welocome } from './App';

Enzyme.configure({ adapter: new Adapter });

describe('Welcome', () => {
  it('should render component matching the snapshot', () => {
    expect(toJson(shallow(<Welocome nextQuestion={() => {}} />))).toMatchSnapshot();
  });
});