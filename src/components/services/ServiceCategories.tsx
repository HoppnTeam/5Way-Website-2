import React from 'react';
import ServiceCard from './ServiceCard';
import { serviceCategories } from './serviceData';

export default function ServiceCategories() {
  return (
    <div>
      {serviceCategories.map((service, index) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          image={service.image}
          features={service.features}
          index={index}
        />
      ))}
    </div>
  );
}