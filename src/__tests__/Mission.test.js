import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Mission from '../components/Pages/Mission';
import store from '../Redux/store';

describe('Test Mission component', () => {
  it('Renders well', () => {
    const root = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    )
      .toJSON;
    expect(root).toMatchSnapshot();
  });
});
