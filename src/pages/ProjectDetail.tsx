import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  heroImage: string;
  images: string[];
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const images = project.images?.length ? project.images : project.heroImage ? [project.heroImage] : [];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        navigate('/portfolio');
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, navigate]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'modal-background') {
      onClose();
      navigate('/portfolio');
    }
  };

  const goToPreviousImage = () =>
    setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const goToNextImage = () =>
    setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const generateAltText = (src: string) => {
    const name = src.split('/').pop()?.replace(/\.[^/.]+$/, '') ?? '';
    return `Wichita custom home photo: ${name.replace(/[-_]/g, ' ')}`;
  };

  return (
    <div
      id="modal-background"
      onClick={handleClickOutside}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
    >
      <Helmet>
        <link rel="preload" as="image" href={project.heroImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VisualArtwork',
            name: project.title,
            image: images,
            creator: {
              '@type': 'Organization',
              name: 'Ternes Construction'
            },
            description: project.description,
            url: window.location.href
          })}
        </script>
      </Helmet>

      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
        <button
          onClick={() => {
            onClose();
            navigate('/portfolio');
          }}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>

        {project.heroImage && (
          <img
            src={project.heroImage}
            alt={`Wichita custom home feature: ${project.title}`}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        )}

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-700 mb-6">{project.description}</p>

          {images.length > 0 && (
            <div className="relative w-full max-w-3xl mx-auto">
              <div
                className={`cursor-pointer overflow-hidden rounded-lg ${
                  isExpanded
                    ? 'fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-xl h-auto bg-white p-6'
                    : ''
                }`}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <img
                  src={images[currentImageIndex]}
                  alt={generateAltText(images[currentImageIndex])}
                  className="w-full h-auto object-contain"
                />
              </div>

              {images.length > 1 && (
                <div className="flex justify-between mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPreviousImage();
                    }}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    &#8592; Prev
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNextImage();
                    }}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Next &#8594;
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
