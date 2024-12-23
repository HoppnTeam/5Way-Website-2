import React from 'react';
import Layout from '../components/Layout';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectGallery from '../components/projects/ProjectGallery';
import AIGallery from '../components/projects/ai-gallery/AIGallery';

export default function Projects() {
  return (
    <Layout>
      <ProjectsHero />
      <ProjectGallery />
      <AIGallery />
    </Layout>
  );
}