import React from 'react';
import { Search, Sparkles, Globe } from 'lucide-react';
import { appColors } from '../theme/colors';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 flex flex-col items-center text-center">
      <div className="flex items-center mb-3">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
          <img 
            src="/logo.png" 
            alt="Mutual Horizon Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="ml-3 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-[#00aaff] bg-clip-text text-transparent">
          Mutual Horizon
        </h1>
      </div>
      <p className="text-[#8ba4c6] max-w-md mx-auto text-sm sm:text-base">
        Research the viability of your brand across domains, digital competition, and IP/copyright
      </p>
      <div className="flex justify-center mt-4 space-x-4 text-[#b3d1ff]">
        <div className="flex items-center">
          <Search size={16} className="mr-1 text-[#00aaff]" />
          <span className="text-xs sm:text-sm">Domain Checks</span>
        </div>
        <div className="flex items-center">
          <Sparkles size={16} className="mr-1 text-[#00aaff]" />
          <span className="text-xs sm:text-sm">IP Analysis</span>
        </div>
        <div className="flex items-center">
          <Globe size={16} className="mr-1 text-[#00aaff]" />
          <span className="text-xs sm:text-sm">Global Coverage</span>
        </div>
      </div>
    </header>
  );
};

export default Header;