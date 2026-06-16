import { whyLeaseItems } from '../data/cars';

export default function WhyLease() {
  return (
    <section className="why-lease">
      <div className="container">
        <h2 className="section-title">Why Lease with D&M?</h2>
        <ul className="why-lease__list">
          {whyLeaseItems.map((item) => (
            <li className="why-lease__item" key={item.id}>
              <img src={item.icon} alt="" className="why-lease__item-img" />
              <h3 className="why-lease__item-title">{item.title}</h3>
              <p className="why-lease__item-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
