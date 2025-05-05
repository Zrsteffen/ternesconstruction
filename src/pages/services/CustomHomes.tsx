import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

import buildProcessHero from '../../images/build_process_hero.jpg';

const buildSteps = [
  {
    title: '1. Bank Pre-Approval',
    description:
      'We begin by helping you secure bank pre-approval, so we can align your dream home design with the right budget. We have trusted bank partners or will happily work with your preferred lender.',
  },
  {
    title: '2. Custom Plans & Specs',
    description:
      'Our team meets with you to understand your vision, needs, and lifestyle. We create a custom design that balances your priorities with your financial parameters.',
  },
  {
    title: '3. Preliminary Estimate',
    description:
      'We provide an early estimate based on initial specs and design. This gives you clarity and confidence that we’re on track.',
  },
  {
    title: '4. Final Architectural Drawings',
    description:
      'Once we’re within your target range, our architect develops final construction drawings for accurate bidding and financing.',
  },
  {
    title: '5. Hard Bids & Pricing',
    description:
      'With finalized plans, we gather hard bids from subcontractors and suppliers to build a complete cost package for loan approval.',
  },
  {
    title: '6. Bank Appraisal',
    description:
      'We coordinate with your lender to submit the full specs and secure an appraisal for the construction loan.',
  },
  {
    title: '7. Construction Loan Closing',
    description:
      'After appraisal approval, we assist you through the closing process so you’re fully funded to begin building.',
  },
  {
    title: '8. Groundbreaking & Build Start',
    description:
      'We break ground and start construction. From permits and inspections to scheduling and updates, we manage everything so you don’t have to.',
  },
  {
    title: '9. Completion & Final Walkthrough',
    description:
      'Typical builds take 6–8 months depending on complexity. We complete final inspections and walk you through your new home personally.',
  },
];

const CustomBuildProcess: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Build Process | Ternes Construction</title>
        <meta
          name="description"
          content="We guide you through every phase of your custom home—from bank approval to move-in—helping reduce stress and create clarity at every step."
        />
        <meta property="og:image" content="https://www.ternesconstruction.com/images/build_process_hero.jpg" />
        <meta property="og:title" content="Our Build Process | Ternes Construction" />
        <meta
          property="og:description"
          content="We handle everything from bank pre-approval to final walkthrough. Clear steps, proven systems, and stress-free support."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[90vh] bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={buildProcessHero}
            alt="Custom home construction process"
            className="w-full h-full object-cover object-center brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Custom Home Build Process
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From loan pre-approval to final inspections, we handle every detail so you can focus on the excitement—not the stress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed, Stress-Free Support</h2>
            <p className="text-neutral-700 text-lg">
              Building a home doesn’t have to be overwhelming. We simplify every phase of the journey—supporting you through financing, planning, permits, inspections, and beyond.
              Preconstruction typically takes around 60 days, with most homes completed within 6–8 months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buildSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="flex items-start">
                  <CheckCircle className="text-primary-600 mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomBuildProcess;
