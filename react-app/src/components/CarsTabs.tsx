import { useState } from 'react';
import { cars, tabs } from '../data/cars';
import type { CarCategory } from '../types';
import CarCard from './CarCard';

export default function CarsTabs() {
  const [activeTab, setActiveTab] = useState<CarCategory>(tabs[0].id);

  return (
    <div className="tabs">
      <div className="tabs__btn">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tabs__btn-item ${activeTab === tab.id ? 'tabs__btn-item--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs__content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tabs__content-item ${activeTab === tab.id ? 'tabs__content-item--active' : ''}`}
            id={tab.id}
          >
            {cars
              .filter((car) => car.category === tab.id)
              .map((car) => (
                <CarCard car={car} key={car.id} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
