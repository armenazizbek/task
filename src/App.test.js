import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import store from './configs/configureStore';

test('renders learn react link', () => {
  const { getByText } = render(<App store={store} />);
  const linkElement = getByText(/Should i eat at McDonalds?/i);
  expect(linkElement).toBeInTheDocument();
});
