import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import DiasporaPackage from './components/DiasporaPackage';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import About from './pages/About';
import ServicesPage from './pages/Services';
import Capabilities from './pages/Capabilities';
import Projects from './pages/Projects';
import BlogPage from './pages/Blog';
import Contact from './pages/Contact';

// Admin Routes
import AdminDashboard from './pages/admin/AdminDashboard';
import BlogManager from './pages/admin/blog/BlogManager';
import ProjectManager from './pages/admin/projects/ProjectManager';
import ServiceManager from './pages/admin/services/ServiceManager';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <Services />
      <DiasporaPackage />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
    </Layout>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/blog" element={<BlogManager />} />
        <Route path="/admin/projects" element={<ProjectManager />} />
        <Route path="/admin/services" element={<ServiceManager />} />
      </Routes>
    </Router>
  );
}