const rules = [
  'How much you can drive, stated as annual miles (excess miles are charged at a specified rate)',
  'Types of damage that you may be liable for at the end of your lease',
  'The procedures and costs when you return the vehicle at the end of your lease',
];

export default function HowItWorks() {
  return (
    <section className="how-work">
      <div className="container">
        <div className="how-work__inner">
          <h2 className="how-work__title section-title">How Does Leasing Work?</h2>
          <p className="how-work__text">
            Leasing a vehicle is essentially entering into a long term rental agreement for that vehicle.
            Unlike a traditional car purchase, you don't actually own the vehicle. Instead, a leasing
            company purchases the vehicle from the dealer on your behalf and then you make monthly
            payments to the leasing company for the duration of your lease. Some leases however, do
            provide the option to purchase the vehicle at the end of the lease.
          </p>
          <h4 className="how-work__mini-title">
            Similar to a short term car rental, there are rules that define:
          </h4>
          <ol className="how-work__list">
            {rules.map((rule) => (
              <li className="how-work__item" key={rule}>
                {rule}
              </li>
            ))}
          </ol>
          <p className="how-work__text">
            Lease contracts are a commitment and ending them early can be difficult and expensive so it is
            important to consider your circumstances carefully before you decide.
          </p>
        </div>
      </div>
    </section>
  );
}
