import type { Car } from '../types';
import { useFavorites } from '../hooks/useFavorites';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(car.id);

  return (
    <div className="card">
      <button
        type="button"
        className={`card__favorite ${favorite ? 'card__favorite--active' : ''}`}
        aria-pressed={favorite}
        aria-label={favorite ? `Remove ${car.title} from favorites` : `Add ${car.title} to favorites`}
        onClick={() => toggleFavorite(car.id)}
      >
        {favorite ? '♥' : '♡'}
      </button>
      <img src={car.image} alt={car.title} className="card__img" />
      <div className="card__content">
        <h4 className="card__title">{car.title}</h4>
        <p className="card__text">starting from $ {car.startingPrice.toLocaleString('en-US')}</p>
        <p className="card__price">$ {car.monthlyPrice.toLocaleString('en-US')}/mo</p>
      </div>
      <span className="card__link">see details</span>
    </div>
  );
}
