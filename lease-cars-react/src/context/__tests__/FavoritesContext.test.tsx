import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { FavoritesProvider } from '../FavoritesContext';
import CarCard from '../../components/CarCard';
import { cars } from '../../data/cars';

describe('FavoritesContext', () => {
  it('toggles a car between favorited and not favorited', async () => {
    const car = cars[0];
    render(
      <FavoritesProvider>
        <CarCard car={car} />
      </FavoritesProvider>,
    );
    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: `Add ${car.title} to favorites` });
    expect(button).toHaveAttribute('aria-pressed', 'false');

    await user.click(button);

    expect(
      screen.getByRole('button', { name: `Remove ${car.title} from favorites` }),
    ).toHaveAttribute('aria-pressed', 'true');
  });
});
