
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export default function Introduction() {
  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Building2 className="w-16 h-16 mb-6 text-green-700" />
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Ready to Build? Let&apos;s Make It Happen.</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600">
              Contact 5Way today to discuss your project. Whether you&apos;re building from abroad or locally, we&apos;re here to make your vision a reality.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-5 lg:mt-12">
            <Link to="/services" className="inline-block">
              <Button>
                Schedule a Free Consultation
              </Button>
            </Link>
            <Link to="/cost-calculator" className="inline-block">
              <Button variant='secondary' className='border border-green-700'>
                Get a Building Estimate
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}