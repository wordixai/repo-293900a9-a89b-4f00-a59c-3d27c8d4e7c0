import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TrackingSection from '../components/TrackingSection';
import DeveloperSection from '../components/DeveloperSection';
import ClientSection from '../components/ClientSection';
import LogoSection from '../components/LogoSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--tokyo-dark))]">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TrackingSection />
      <DeveloperSection />
      <ClientSection />
      <LogoSection />
      <Footer />
    </div>
  );
};

export default Index;