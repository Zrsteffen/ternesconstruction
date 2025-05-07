import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    images: string[];
    description: string;
    location: string;
    date: string;
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleClickOutside}
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
    >
      <div className="bg-white rounded-lg max-w-5xl w-full relative p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="mb-4 text-sm text-gray-600">{project.description}</p>

        <div className="relative w-full overflow-hidden rounded-lg">
          <img
            src={project.images[currentIndex]}
            alt={`${project.title} Image ${currentIndex + 1}`}
            className="w-full max-h-[500px] object-cover rounded"
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div>
            <strong className="block text-gray-800">Location</strong>
            <span>{project.location}</span>
          </div>
          <div>
            <strong className="block text-gray-800">Completed</strong>
            <span>{project.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
