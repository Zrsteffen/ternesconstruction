import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';

const ProjectDetail = () => {
  const { projectId } = useParams();

  return (
    <>
      <Helmet>
        <title>Project Details | Your Company Name</title>
        <meta name="description" content="Detailed information about our projects" />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <SectionTitle title="Project Details" subtitle={`Project ID: ${projectId}`} />
        <div className="mt-12">
          {/* Project detail content will be added here */}
          <p className="text-gray-600">Project details coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;