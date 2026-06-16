import Layout from '../components/layout/Layout';
import HeroSlider from '../components/HeroSlider';
import WhyLease from '../components/WhyLease';
import HowItWorks from '../components/HowItWorks';
import VideoSection from '../components/VideoSection';
import ImportantThings from '../components/ImportantThings';

export default function Home() {
  return (
    <Layout bodyClassName="home-page">
      <section className="top">
        <div className="container">
          <h1 className="title">Leasing From D&M</h1>
          <span className="top__link">FIND A CAR</span>
        </div>
      </section>
      <HeroSlider />
      <WhyLease />
      <HowItWorks />
      <VideoSection />
      <ImportantThings />
    </Layout>
  );
}
