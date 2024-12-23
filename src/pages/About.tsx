import React from 'react';
import Layout from '../components/Layout';
import AboutHero from '../components/about/AboutHero';
import CompanyProfile from '../components/about/CompanyProfile';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import TeamHighlights from '../components/about/TeamHighlights';

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <CompanyProfile />
      <MissionVision />
      <CoreValues />
      <TeamHighlights />
    </Layout>
  );
}