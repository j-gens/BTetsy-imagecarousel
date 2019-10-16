/**
 * @jest-environment jsdom
 */
import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import App from '../../../client/components/app.jsx';
import Carousel from '../../../client/components/carousel.jsx';
import Display from '../../../client/components/display.jsx';
import LeftArrow from '../../../client/components/leftArrow.jsx';
import RightArrow from '../../../client/components/rightArrow.jsx';

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
});