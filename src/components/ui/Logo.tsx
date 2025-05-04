// src/components/ui/Logo.tsx
import React from 'react';

interface LogoProps {
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isFooter = false }) => {
  return (
    <div className="flex items-center">
      <img
        src="/images/logo.png"
        alt="Ternes Construction"
        className={`h-20 w-auto ${isFooter ? 'invert' : ''}`} // h-20 instead of h-10
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
