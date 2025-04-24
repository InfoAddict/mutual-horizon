import React from 'react';
import { Check, Copy, RefreshCw as Refresh, Download, Share2 } from 'lucide-react';
import { appColors } from '../theme/colors';
import ReactMarkdown from 'react-markdown';
import html2pdf from 'html2pdf.js';
import {
  TwitterShareButton,
  LinkedinShareButton,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

interface ResultDisplayProps {
  result: string;
  onReset: () => void;
  brandName: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onReset, brandName }) => {
  const [copied, setCopied] = React.useState(false);
  const [showShare, setShowShare] = React.useState(false);
  const resultRef = React.useRef<HTMLDivElement>(null);
  const shareButtonsRef = React.useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadPDF = () => {
    if (!resultRef.current) return;

    const filename = `Brand Research - ${brandName}.pdf`;

    const element = resultRef.current;
    const opt = {
      margin: [0.5, 0.5],
      filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait',
        hotfixes: ['px_scaling']
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().from(element).set(opt).save();
  };

  // Close share menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareButtonsRef.current && !shareButtonsRef.current.contains(event.target as Node)) {
        setShowShare(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const shareUrl = window.location.href;
  const shareTitle = `Brand Research Results for ${brandName}`;

  return (
    <div className="w-full max-w-[80%] mx-auto">
      <div className="bg-[#0e2a47] rounded-xl shadow-lg overflow-hidden p-6 
                     animate-fade-in backdrop-blur-sm">
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-xl font-medium text-white">Brand Research Results</h3>
          <div className="flex space-x-2">
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center p-2 text-sm rounded-md transition-colors 
                         bg-[#153654] hover:bg-[#1d4368] text-[#b3d1ff]"
              aria-label="Copy to clipboard"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
            <button
              onClick={downloadPDF}
              className="inline-flex items-center p-2 text-sm rounded-md transition-colors 
                         bg-[#153654] hover:bg-[#1d4368] text-[#b3d1ff]"
              aria-label="Download as PDF"
            >
              <Download size={16} />
            </button>
            <div className="relative" ref={shareButtonsRef}>
              <button
                onClick={() => setShowShare(!showShare)}
                className="inline-flex items-center p-2 text-sm rounded-md transition-colors 
                           bg-[#153654] hover:bg-[#1d4368] text-[#b3d1ff]"
                aria-label="Share results"
              >
                <Share2 size={16} />
              </button>
              {showShare && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-[#153654] rounded-md shadow-xl z-20">
                  <div className="px-4 py-2 space-y-2">
                    <TwitterShareButton url={shareUrl} title={shareTitle} className="w-full">
                      <div className="flex items-center space-x-2 hover:bg-[#1d4368] p-2 rounded-md transition-colors">
                        <TwitterIcon size={24} round />
                        <span className="text-[#b3d1ff] text-sm">Share on Twitter</span>
                      </div>
                    </TwitterShareButton>
                    <LinkedinShareButton url={shareUrl} title={shareTitle} className="w-full">
                      <div className="flex items-center space-x-2 hover:bg-[#1d4368] p-2 rounded-md transition-colors">
                        <LinkedinIcon size={24} round />
                        <span className="text-[#b3d1ff] text-sm">Share on LinkedIn</span>
                      </div>
                    </LinkedinShareButton>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={onReset}
              className="inline-flex items-center p-2 text-sm rounded-md transition-colors 
                         bg-[#153654] hover:bg-[#1d4368] text-[#b3d1ff]"
              aria-label="Start new research"
            >
              <Refresh size={16} />
            </button>
          </div>
        </div>
        
        <div 
          ref={resultRef} 
          className="prose prose-invert max-w-none bg-[#05101d] border border-[#2c4766] rounded-lg p-4"
          style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
        >
          {result ? (
            <ReactMarkdown>{result}</ReactMarkdown>
          ) : (
            <p className="text-[#8ba4c6] italic">No result data available.</p>
          )}
        </div>
        
        <div className="mt-4">
          <button
            onClick={onReset}
            className="w-full py-3 px-4 bg-gradient-to-r from-[#004466] to-[#006699] 
                      hover:from-[#005577] hover:to-[#0077aa] text-white rounded-lg 
                      font-medium transition-all duration-300 flex items-center justify-center
                      hover:shadow-[0_0_10px_rgba(0,170,255,0.4)]"
          >
            <Refresh className="-ml-1 mr-2 h-5 w-5" />
            Start New Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;