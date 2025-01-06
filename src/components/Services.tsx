
import { Home, Wrench, SunMedium, Building } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: 'Finishes',
    subs: [
      "Interior & Exterior Painting",
      "Custom Tiling & Flooring",
      "Epoxy Coatings"
    ]
  },
  {
    icon: Building,
    title: 'Concrete & Masonry',
    subs: [
      "Foundations & Retaining Walls",
      "Driveways, Walkways & Patios"
    ]
  },
  {
    icon: SunMedium,
    title: 'Smart Home & Solar',
    subs: [
      "Smart Home Automation",
      "Solar Power & Energy Storage"
    ]
  },
  {
    icon: Wrench,
    title: 'Landscape & Environment',
    subs: [
      "Landscape Design & Installation",
      "Environmental Restoration"
    ]
  },
  {
    icon: Wrench,
    title: 'Construction Project Management',
    subs: [
      "Full Project Planning",
      "Budget and Timeline Management"
    ]
  }
];

export default function Services() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-2 text-3xl font-bold text-center text-gray-900">Comprehensive Construction Solutions Tailored to Your Needs.</h2>
        <p className="mb-8 text-lg text-center text-gray-600">
          From Concept to Completion, We Deliver Excellence in Every Project.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
              <service.icon className="w-12 h-12 mb-4 text-green-700" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
              <ul className='ml-5 list-disc'>
                {
                  service.subs.map((sub, index) => (
                    <li key={index}>
                      <span>{sub}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-5 lg:mt-12">
          <Link to="/services" className="inline-block">
            <Button>
              Explore All Services
              <Home className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}