import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
  test('renders the navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const logoElement = screen.getByAltText('Space Travelers Hub');
    expect(logoElement).toBeInTheDocument();

    const rocketsLink = screen.getByText('Rocket');
    expect(rocketsLink).toBeInTheDocument();

    const missionsLink = screen.getByText('Mission');
    expect(missionsLink).toBeInTheDocument();

    const profileLink = screen.getByText('MyProfile');
    expect(profileLink).toBeInTheDocument();
  });
});
