import React from 'react';
import logo from '../../images/logo.png'; // adjust path if you're in a deeper folder

const Logo: React.FC = () => {
  return (
    <img
      src={logo}
      alt="Ternes Construction"
      className="h-20 w-auto"
      loading="lazy"
    />
  );
};

export default Logo;
