import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import CarsTabs from '../CarsTabs';
import { FavoritesProvider } from '../../context/FavoritesContext';

function renderTabs() {
  return render(
    <FavoritesProvider>
      <CarsTabs />
    </FavoritesProvider>,
  );
}

describe('CarsTabs', () => {
  it('shows Retro Cars by default', () => {
    renderTabs();
    expect(screen.getByText('Lamborghini 1966')).toBeVisible();
  });

  it('switches to Trucks content when the Trucks tab is clicked', async () => {
    renderTabs();
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'Trucks' }));

    expect(screen.getByText('Ford 2024')).toBeVisible();
  });
});
