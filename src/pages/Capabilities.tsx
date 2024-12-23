import React from 'react';
import Layout from '../components/Layout';
import CapabilitiesHero from '../components/capabilities/CapabilitiesHero';
import CoreCompetencies from '../components/capabilities/CoreCompetencies';
import BlueprintTransition from '../components/capabilities/BlueprintTransition';
import EquipmentResources from '../components/capabilities/EquipmentResources';
import ProcessTimeline from '../components/capabilities/ProcessTimeline';

export default function Capabilities() {
  return (
    <Layout>
      <CapabilitiesHero />
      <CoreCompetencies />
      <BlueprintTransition />
      <EquipmentResources />
      <ProcessTimeline />
    </Layout>
  );
}