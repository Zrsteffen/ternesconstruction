import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  // Construct full canonical URL
  const canonicalUrl = `https://www.ternesconstruction.com/services/${serviceId}`;

  return (
    <>
      <Helmet>
        <title>{`Service: ${serviceId} | Ternes Construction`}</title>
        <meta
          name="description"
          content={`Explore detailed information about our ${serviceId} services, custom-built for Wichita and surrounding Kansas communities.`}
        />
        <meta property="og:title" content={`Service: ${serviceId} | Ternes Construction`} />
        <meta property="og:description" content={`Explore detailed information about our ${serviceId} services.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Service: ${serviceId} | Ternes Construction`} />
        <meta name="twitter:description" content={`Explore detailed information about our ${serviceId} services.`} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          title="Service Details"
          subtitle={`Service: ${serviceId}`}
        />
        <div className="mt-12">
          {/* You can dynamically render actual service content here */}
          <p className="text-gray-600">Service details coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
