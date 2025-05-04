import React from 'react';
import logo from '../../images/logo.png'; // ✅ Adjust this if your directory structure is different

interface LogoProps {
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isFooter = false }) => {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Ternes Construction"
        className={`h-10 w-auto ${isFooter ? 'invert' : ''}`}
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
