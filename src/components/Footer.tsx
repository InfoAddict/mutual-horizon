import React from 'react';
import { Shield, Globe, Database } from 'lucide-react';
import { appColors } from '../theme/colors';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-y-6 gap-x-10 mb-6 text-sm text-[#8ba4c6]">
          <div className="flex items-center">
            <Shield size={16} className="mr-2 text-[#00aaff]" />
            <span>Secure Data Processing</span>
          </div>
          <div className="flex items-center">
            <Globe size={16} className="mr-2 text-[#00aaff]" />
            <span>Global Brand Analysis</span>
          </div>
          <div className="flex items-center">
            <Database size={16} className="mr-2 text-[#00aaff]" />
            <span>Comprehensive Database</span>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-[#0e2a47] rounded-full mr-2">
              <span className="text-[#00aaff] font-bold text-xs">M</span>
            </div>
            <p className="text-xs text-[#5d718c]">
              © {new Date().getFullYear()} Mutual Horizon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;