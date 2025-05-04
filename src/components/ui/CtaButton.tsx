import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CtaButtonProps {
  text: string;
  to: string;
  primary?: boolean;
  outline?: boolean;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ 
  text, 
  to, 
  primary = true, 
  outline = false,
  className = ''
}) => {
  const baseClass = 'btn';
  let styleClass = '';

  if (primary && !outline) {
    styleClass = 'btn-primary';
  } else if (primary && outline) {
    styleClass = 'btn-outline';
  } else if (!primary && !outline) {
    styleClass = 'btn-secondary';
  } else {
    styleClass = 'border-2 border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:text-white';
  }

  return (
    <Link 
      to={to} 
      className={`${baseClass} ${styleClass} ${className} group`}
    >
      {text}
      <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
    </Link>
  );
};

export default CtaButton;