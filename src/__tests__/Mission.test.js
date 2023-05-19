import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../components/Pages/Mission';
import store from '../redux/store';

describe('Test Mission component', () => {
  it('Renders well', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
