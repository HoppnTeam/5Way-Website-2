
import { Award, Shield, Clock, MapPin, Phone } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Expertise & Innovation',
    description: 'We combine years of experience with cutting-edge technology to deliver exceptional results.'
  },
  {
    icon: Phone,
    title: 'Transparent Communication',
    description: 'Stay informed with regular updates, progress reports, and clear communication at every stage.'
  },
  {
    icon: Shield,
    title: 'Sustainability Focus',
    description: 'Our eco-friendly construction practices ensure a greener future for every project.'
  },
  {
    icon: Clock,
    title: 'Quality & Precision',
    description: 'We maintain the highest standards of quality and attention to detail in every project.'
  },
  {
    icon: MapPin,
    title: 'Tailored Solutions',
    description: 'Each project is customized to meet your unique needs, preferences, and budget.'
  }
];

export default function WhyChooseUs() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We combine expertise, quality, and dedication to deliver exceptional construction solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="p-6 transition-all bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-50">
                <reason.icon className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}