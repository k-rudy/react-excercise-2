import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

test('renders navigation menus correctly', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkPostsElement = screen.getByTestId(/posts/i);
  const linkAlbumsElement = screen.getByTestId(/albums/i);
  expect(linkPostsElement).toBeInTheDocument();
  expect(linkAlbumsElement).toBeInTheDocument();
});
