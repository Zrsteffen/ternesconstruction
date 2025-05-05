import React from 'react';
import logo from '/src/images/logo.png'; // Absolute path from project root for Vite consistency

interface LogoProps {
  size?: number; // optional prop to control height
}

const Logo: React.FC<LogoProps> = ({ size = 80 }) => {
  return (
    <img
      src={logo}
      alt="Ternes Construction"
      height={size}
      style={{ height: `${size}px`, width: 'auto' }}
      className="block"
      loading="eager"
      decoding="async"
    />
  );
};

export default Logo;
