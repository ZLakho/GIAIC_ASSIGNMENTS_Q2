import Header from './components/header'
import ProductGrid from './components/ProductGrid';
import PromoSection from './components/PromoSection';
import Footer from './components/footer';
import Threesection from './components/threesection';
import Footerup from './components/footerup';
import Discount from './components/discount';
import FifthDiv from './components/fifthDiv';
import CategoryGrid from './components/category';

export default function Home() {
  return (
    <div>
      <Header />
      <PromoSection />
      <Threesection />
      <CategoryGrid />
      <ProductGrid />
      <FifthDiv />
      <Discount />
      <Footerup />
      <Footer />
    </div>
  );
}
