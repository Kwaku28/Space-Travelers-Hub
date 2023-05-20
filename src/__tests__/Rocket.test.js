import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rocket from '../components/Pages/Rocket/Rocket';
import store from '../Redux/store';

describe('Test Mission component', () => {
  it('Renders well', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
