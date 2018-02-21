import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { Review } from './review';

Enzyme.configure({ adapter: new Adapter });

const props = {
  answers: ['A1 of Q1'],
  moveToQuestion: () => {},
  submitAnswer: () => {}
}

describe('Review', () => {
  it('should render component matching the snapshot', () => {
    expect(toJson(shallow(<Review {...props} />))).toMatchSnapshot();
  });
});