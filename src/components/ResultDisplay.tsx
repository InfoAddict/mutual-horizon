import React from 'react';
import { Check, Copy, RefreshCw as Refresh, Download } from 'lucide-react';
import { appColors } from '../theme/colors';
import ReactMarkdown from 'react-markdown';
import html2pdf from 'html2pdf.js';

interface ResultDisplayProps {
  result: string;
  onReset: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onReset }) => {
  const [copied, setCopied] = React.useState(false);
  const resultRef = React.useRef<HTMLDivElement>(null);

  // Copy result to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    
    // Reset copied state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  // Download result as PDF
  const downloadPDF = () => {
    if (!resultRef.current) return;

    const element = resultRef.current;
    const opt = {
      margin: 1,
      filename: 'brand-research-results.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

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
        
        <div ref={resultRef} className="overflow-auto max-h-[500px] rounded-lg p-4 bg-[#05101d] border border-[#2c4766]">
          {result ? (
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
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