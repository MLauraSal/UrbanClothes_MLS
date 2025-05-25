               
import Banner from '../components/Banner';
import Modal from '../components/Modal';
import Category from '../components/Category';
import ProductContainer from '../components/ProductContainer';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Testimonial from '../components/Testimonial';

import '../assets/css/styles.css';
import '../assets/css/Responsive.css';





export const Home = () => {
 

  return (
    <div>
      <Modal />
      <main>
        <Banner />
        <Category />
        <ProductContainer  />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};
export default Home