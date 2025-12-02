import HeroSection from './components/HeroSection';
import NutritionSolutions from './components/NutritionSolutions';
import BestSellers from './components/BestSellers';
import BrandTrust from './components/BrandTrust';
import SmartHealth from './components/SmartHealth';
import ResearchManufacturing from './components/ResearchManufacturing';
import CharitableInitiatives from './components/CharitableInitiatives';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NutritionSolutions />
      <BestSellers />
      <BrandTrust />
      <SmartHealth />
      <ResearchManufacturing />
      <CharitableInitiatives />
      <Testimonials />
    </main>
  );
}
