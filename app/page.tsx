import Navbar from '@/components/Common/Navbar';
import HeroBanner from '@/components/HeroBanner';
import Features from '@/components/Features';
import PromoVideo from '@/components/PromoVideo';
import AboutApp from '@/components/AboutApp';
import KeyFeatures from '@/components/KeyFeatures';
import AppDownload from '@/components/AppDownload';
import AppScreens from '@/components/AppScreens';
import Integrations from '@/components/Integrations';
import PricingTable from '../components/PricingTable';
import Testimonials from '@/components/Testimonials';
import OurLatestBlog from '@/components/OurLatestBlog';
import Newsletter from '@/components/Newsletter';
import Partner from '@/components/Common/Partner';
import Footer from '@/components/Common/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <Footer />
    </>
  );
}
