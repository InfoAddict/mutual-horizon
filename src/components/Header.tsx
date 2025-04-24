import React from 'react';
import { Search, Sparkles, Globe } from 'lucide-react';
import { appColors } from '../theme/colors';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 flex flex-col items-center text-center">
      <div className="flex items-center mb-3">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
          {/* Logo container with orbital rings */}
          <div className="absolute inset-0 w-full h-full rounded-full border-2 border-transparent 
                         bg-gradient-to-r from-[#00aaff] to-transparent 
                         opacity-70 animate-spin-slow" 
               style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-0 w-full h-full rounded-full border-2 border-transparent 
                         bg-gradient-to-l from-[#00aaff] to-transparent 
                         opacity-70 animate-spin-reverse-slow" 
               style={{ animationDuration: '15s' }}></div>
          <div className="absolute inset-1 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center 
                        bg-[#0a1a2f] rounded-full shadow-lg z-10">
            <span className="text-[#00aaff] font-bold text-2xl sm:text-3xl">M</span>
          </div>
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