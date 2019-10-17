/**
 * @jest-environment jsdom
 */
import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import App from '../../../client/components/app.jsx';
import CarouselPic from '../../../client/components/carousel.jsx';
import Display from '../../../client/components/display.jsx';
import LeftArrow from '../../../client/components/leftArrow.jsx';
import RightArrow from '../../../client/components/rightArrow.jsx';

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('<CarouselPic />', () => {
  test('It renders a picture based on prop', () => {

    let wrapper = Enzyme.mount(<CarouselPic image={'https://btetsy.s3.us-east-2.amazonaws.com/2_1.jpg'} />);

    expect(wrapper.find('.carouselPic').get(0).props.style.backgroundImage).toBe('url(https://btetsy.s3.us-east-2.amazonaws.com/2_1.jpg)');
  });
});

