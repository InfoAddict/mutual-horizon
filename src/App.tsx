import React, { useState } from 'react';
import Header from './components/Header';
import BrandForm from './components/BrandForm';
import ResultDisplay from './components/ResultDisplay';
import Footer from './components/Footer';
import { FormState } from './types';

function App() {
  const [result, setResult] = useState<string>('');
  const [appState, setAppState] = useState<FormState>(FormState.IDLE);

  // Handle form submission success
  const handleSuccess = (reply: string) => {
    setResult(reply);
    setAppState(FormState.SUCCESS);
  };

  // Reset the app to initial state
  const handleReset = () => {
    setResult('');
    setAppState(FormState.IDLE);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#05101d] text-white">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#05101d]"></div>
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0a1a2f] to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a1a2f] to-transparent opacity-60"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#00aaff] rounded-full filter blur-[120px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#00aaff] rounded-full filter blur-[120px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-5xl mx-auto px-4 py-8">
        <Header />
        
        <main className="flex-grow flex flex-col items-center justify-center py-8">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#00aaff] bg-clip-text text-transparent">
                Research Your Brand's Potential
              </h2>
              <p className="text-[#b3d1ff] max-w-2xl mx-auto">
                Enter your brand details below to analyze domain availability, digital competition, and potential intellectual property conflicts.
              </p>
            </div>
            
            {appState === FormState.SUCCESS ? (
              <ResultDisplay result={result} onReset={handleReset} />
            ) : (
              <BrandForm onSubmitSuccess={handleSuccess} />
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;