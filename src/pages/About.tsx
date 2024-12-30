import Layout from '../components/Layout';
import AboutHero from '../components/about/AboutHero';
import CompanyProfile from '../components/about/CompanyProfile';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import TeamHighlights from '../components/about/TeamHighlights';
import OurStrengths from '@/components/about/OurStrength';
import Sustainability from '@/components/about/Sustainability';
import WhyChoose5Way from '@/components/about/WhyChoose5Way';

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <CompanyProfile />
      <MissionVision />
      <CoreValues />
      <OurStrengths />
      <Sustainability />
      <WhyChoose5Way />
      {/* <TeamHighlights /> */}
    </Layout>
  );
}