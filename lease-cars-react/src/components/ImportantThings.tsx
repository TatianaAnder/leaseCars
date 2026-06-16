import { importantThings } from '../data/cars';

export default function ImportantThings() {
  return (
    <section className="important-things">
      <div className="container">
        <h2 className="section-title important-things__title">Important Things to Consider</h2>
        <p className="important-things__text">
          Depending on your circumstances and what is important to you, a lease could be a great option
          for your next vehicle. Below are some important factors that may influence your decision.
        </p>
        <ul className="important-things__list">
          {importantThings.map((item) => (
            <li className="important-things__list-item" key={item.id}>
              <img src={item.icon} alt="" className="important-things__list-img" />
              <p className="important-things__list-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
