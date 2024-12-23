import React from 'react';
import Layout from '../components/Layout';
import ServicesHero from '../components/services/ServicesHero';
import ServiceCategories from '../components/services/ServiceCategories';

export default function Services() {
  return (
    <Layout>
      <ServicesHero />
      <ServiceCategories />
    </Layout>
  );
}