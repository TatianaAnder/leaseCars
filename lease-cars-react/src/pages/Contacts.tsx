import Layout from '../components/layout/Layout';
import ContactForm from '../components/ContactForm';
import Blog from '../components/Blog';

export default function Contacts() {
  return (
    <Layout bodyClassName="contacts-page">
      <section className="contacts">
        <div className="container">
          <h2 className="section-title contacts-title">Contact Us</h2>
          <p className="contacts-text">
            Feel free to contact us with questions, potential partnerships or media inquiries
          </p>
          <ContactForm />
        </div>
      </section>
      <Blog />
    </Layout>
  );
}
