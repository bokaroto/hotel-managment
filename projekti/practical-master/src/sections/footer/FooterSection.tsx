import footer from '../../assets/footer.png';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function FooterSection() {
  return (
    <section>
      <div className="" style={{ backgroundImage: `url(${footer})` }}>
        <Newsletter />
        <Footer />
      </div>
    </section>
  );
}
