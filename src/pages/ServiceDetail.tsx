import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <>
      <Helmet>
        <title>Service Details | Your Company Name</title>
        <meta name="description" content="Detailed information about our services" />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <SectionTitle title="Service Details" subtitle={`Service ID: ${serviceId}`} />
        <div className="mt-12">
          {/* Service detail content will be added here */}
          <p className="text-gray-600">Service details coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;