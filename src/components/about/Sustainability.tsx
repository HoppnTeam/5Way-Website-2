import { Leaf, Sun, Recycle, Droplet, TreesIcon as Tree, LucideIcon } from 'lucide-react'
import { ReactNode } from 'react';

const Sustainability = () => {
  return (
    <section className="px-4 py-16 bg-green-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-extrabold text-center text-green-800 sm:text-4xl">
          Sustainability and Environmental Commitment
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">
          At 5Way, we understand the importance of preserving the environment for future generations. Our sustainable building practices include:
        </p>
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Leaf className="w-8 h-8 text-green-500" />}
            title="Eco-Friendly Materials"
            description="We prioritize the use of low-impact, sustainable building materials that reduce carbon emissions and promote energy efficiency."
          />
          <FeatureCard
            icon={<Sun className="w-8 h-8 text-green-500" />}
            title="Renewable Energy Integration"
            description="We specialize in the design and installation of solar power systems and energy-efficient lighting, reducing dependence on non-renewable energy sources."
          />
          <FeatureCard
            icon={<Recycle className="w-8 h-8 text-green-500" />}
            title="Waste Reduction"
            description="Our construction processes are designed to minimize waste through careful planning, recycling, and the use of prefabricated components where applicable."
          />
          <FeatureCard
            icon={<Droplet className="w-8 h-8 text-green-500" />}
            title="Water Management"
            description="We implement water-saving technologies, such as rainwater harvesting and low-flow fixtures, to reduce water consumption and promote resource conservation."
          />
          <FeatureCard
            icon={<Tree className="w-8 h-8 text-green-500" />}
            title="Green Spaces"
            description="Our landscaping and gardening services incorporate native plants and sustainable designs to enhance biodiversity and promote a healthy environment."
          />
        </div>
        <p className="max-w-3xl mx-auto mt-12 text-xl text-center text-gray-600">
          We are committed to building structures that are not only functional and aesthetically pleasing but also environmentally responsible.
        </p>
      </div>
    </section>
  )
}

const FeatureCard = ({ icon, title, description }: {icon: ReactNode, title: string, description: string}) => {
  return (
    <div className="flex flex-col items-start p-6 text-left bg-white rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Sustainability

