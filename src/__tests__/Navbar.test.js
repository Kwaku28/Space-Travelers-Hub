import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/navbar';

describe('Navbar', () => {
  test('renders the navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    // Assert that the logo is rendered
    const logoElement = screen.getByAltText('Space Travelers Hub');
    expect(logoElement).toBeInTheDocument();

    // Assert that the navigation links are rendered
    const rocketsLink = screen.getByText('Rockets');
    expect(rocketsLink).toBeInTheDocument();

    const missionsLink = screen.getByText('Missions');
    expect(missionsLink).toBeInTheDocument();

    const profileLink = screen.getByText('MyProfile');
    expect(profileLink).toBeInTheDocument();
  });
});
