import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { Card } from './card';

Enzyme.configure({ adapter: new Adapter });

const props = {
  question: { title: 'Q1', options: { 'Opt1': 1, 'Opt2': 2} },
  answer: '',
  index: 0,
  prevQuestion: () => {},
  nextQuestion: () => {},
  selectAnswer: () => {},
}

describe('Card', () => {
  it('should render component matching the snapshot', () => {
    expect(toJson(shallow(<Card {...props} />))).toMatchSnapshot();
  });

  it('should change class name for selected answer', () => {
    expect(shallow(<Card {...props} answer={'Opt1'} />).find('li').first().hasClass('selected')).toBe(true);
  })
});