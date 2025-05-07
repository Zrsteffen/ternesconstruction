import React, { useEffect } from 'react';

interface ProjectDetailProps {
  project: {
    id: string;
    title: string;
    images: string[];
    description: string;
    location: string;
    date: string;
  };
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {AV
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6" onClick={onClose}>
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl">
          &times;
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-neutral-600 mb-4">{project.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, idx) => (
              <img key={idx} src={img} alt={`Slide ${idx}`} className="rounded-lg" />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Location:</strong> {project.location}
            </div>
            <div>
              <strong>Completed:</strong> {project.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
