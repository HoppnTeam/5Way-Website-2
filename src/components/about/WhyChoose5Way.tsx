import { CheckCircle } from 'lucide-react'

const WhyChoose5Way = () => {
  const reasons = [
    "Comprehensive construction services from consultation to project handover.",
    "Tailored solutions for clients in Nigeria and the Diaspora.",
    "Transparent communication and real-time project updates.",
    "Commitment to sustainability and eco-friendly construction practices.",
    "A trusted partner focused on quality, safety, and client satisfaction."
  ]

  return (
    <section className="px-4 py-16 bg-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
          Why Choose 5Way Contractors?
        </h2>
        <div className="mt-8 space-y-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
              <p className="ml-3 text-lg text-gray-700">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose5Way

