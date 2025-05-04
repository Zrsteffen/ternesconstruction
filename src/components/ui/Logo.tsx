import React from 'react';

interface LogoProps {
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isFooter = false }) => {
  return (
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt="Ternes Construction"
        className={`h-10 w-auto ${isFooter ? 'invert' : ''}`}
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
