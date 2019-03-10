import React from 'react';
import { shallow, mount } from 'enzyme';

import MovieContainer from './MovieContainer';
import MovieSummary from './MovieSummary';
import MovieDetail from './MovieDetail';

const movie = {
  id: 135397,
  overview: 'Twenty-two years after the events of Jurassic Park...',
  release_date: '2015-06-12',
  poster_path: '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg',
  title: 'Jurassic World',
  vote_average: 6.9
};

describe('MovieContainer', () => {
  test('Initializes state to summary view', () => {
    const comp = shallow(<MovieContainer {...movie} setRatingFor={jest.fn} />);
    expect(comp).toHaveState('detail', false);
  });

  test('Initially renders summary view', () => {
    const comp = shallow(<MovieContainer {...movie} setRatingFor={jest.fn} />);
    expect(comp).toContainMatchingElement(MovieSummary);
    expect(comp).not.toContainMatchingElement(MovieDetail);
  });

  test('Toggling state renders detail view', () => {
    const comp = shallow(<MovieContainer {...movie} setRatingFor={jest.fn} />);
    expect(comp).not.toContainMatchingElement(MovieDetail);
    comp.setState({ detail: true });
    expect(comp).toContainMatchingElement(MovieDetail);
  });

// Given the MovieContainer is rendered
// And the MovieDetail component does not exist
// When I click on the MovieTitle component
// Then I expect the MovieDetail component to exist
// And I expect the element 'img[src="http://image.tmdb.org/t/p/w185/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"]' to exist
// When I click on the MovieTitle component
// Then I expect the MovieDetail component to not exist
  test('Clicking on title toggles detail view', () => {
    // Use mount so that children will be rendered and we can interact with the DOM
    const comp = mount(<MovieContainer {...movie} setRatingFor={jest.fn} />);
    expect(comp).not.toContainMatchingElement(MovieDetail);

    // styled-compnents don't have their displayName set, so we do so manually
    // to enable find('MovieTitle');
    comp.find('MovieTitle').simulate('click');
    expect(comp).toContainMatchingElement(MovieDetail);
    expect(comp).toContainExactlyOneMatchingElement(
      'img[src="http://image.tmdb.org/t/p/w185/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"]'
    );

    comp.find('MovieTitle').simulate('click');
    expect(comp).not.toContainMatchingElement(MovieDetail);
  });
});
