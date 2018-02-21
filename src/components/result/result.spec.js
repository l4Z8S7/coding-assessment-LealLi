import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { Result } from './result';

Enzyme.configure({ adapter: new Adapter });

describe('Result', () => {
  it('should render component matching the snapshot', () => {
    expect(toJson(shallow(<Result score={50} />))).toMatchSnapshot();
  });
});