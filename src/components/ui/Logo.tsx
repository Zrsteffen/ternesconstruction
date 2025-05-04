import React from 'react';
import { Construction } from 'lucide-react';

interface LogoProps {
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isFooter = false }) => {
  return (
    <div className={`flex items-center ${isFooter ? 'text-white' : ''}`}>
      <Construction size={32} className={isFooter ? 'text-white' : 'text-primary-600'} />
      <span className={`ml-2 text-xl font-bold ${isFooter ? 'text-white' : 'text-neutral-900'}`}>
        Ternes Construction
      </span>
    </div>
  );
};

export default Logo;