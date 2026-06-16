import Layout from '../components/layout/Layout';
import CarsTabs from '../components/CarsTabs';
import Blog from '../components/Blog';

export default function NewCars() {
  return (
    <Layout bodyClassName="cars-page">
      <section className="choose">
        <div className="container">
          <h2 className="section-title">Choose your car</h2>
          <CarsTabs />
          <button className="showmore__btn" type="button">
            show more
          </button>
        </div>
      </section>
      <Blog />
    </Layout>
  );
}
