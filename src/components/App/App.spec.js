import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';
import Welcome from '../welcome/welcome';
import Card from '../card/card';
import Review from '../review/review';
import Result from '../result/result';

Enzyme.configure({ adapter: new Adapter });

const props = {
  questions: [{ title: 'Q1', options: { 'Opt1': 1, 'Opt2': 2} }],
  index: -1,
  submitted: false,
  fetchQuestions: () => {}
}

describe('App', () => {
  it('should render Welcome component when index is -1', () => {
    expect(toJson(shallow(<App {...props} />))).toMatchSnapshot();
    expect(shallow(<App {...props} />).contains(<Welcome />)).toBe(true);
  });

  it('should render Card component when index is the number between 0 and length of questions', () => {
    expect(toJson(shallow(<App {...props} index={0} />))).toMatchSnapshot();
    expect(shallow(<App {...props} index={0} />).contains(<Card />)).toBe(true);
  });

  it('should render Review component when navigate to the end', () => {
    expect(toJson(shallow(<App {...props} index={1} />))).toMatchSnapshot();
    expect(shallow(<App {...props} index={1} />).contains(<Review />)).toBe(true);
  });

  it('should render Result component when submiited is true', () => {
    expect(toJson(shallow(<App {...props} submitted={true} />))).toMatchSnapshot();
    expect(shallow(<App {...props} submitted={true} />).contains(<Result />)).toBe(true);
  });
})