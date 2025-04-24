import React, { useState } from 'react';
import { Loader2, Rocket, AlertCircle } from 'lucide-react';
import { BrandFormData, FormState, industries, regions } from '../types';
import { submitBrandResearch } from '../utils/api';
import { appColors } from '../theme/colors';

interface BrandFormProps {
  onSubmitSuccess: (reply: string) => void;
}

const BrandForm: React.FC<BrandFormProps> = ({ onSubmitSuccess }) => {
  // Form data state
  const [formData, setFormData] = useState<BrandFormData>({
    brandName: '',
    industry: '',
    region: '',
  });

  // Form submission state
  const [formState, setFormState] = useState<FormState>(FormState.IDLE);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.brandName || !formData.industry || !formData.region) {
      setFormState(FormState.ERROR);
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      setFormState(FormState.LOADING);
      setErrorMessage('');
      
      // Submit data to API
      const response = await submitBrandResearch(formData);
      
      // Handle success
      setFormState(FormState.SUCCESS);
      onSubmitSuccess(response.reply);
      
    } catch (error) {
      // Handle error
      setFormState(FormState.ERROR);
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'An unexpected error occurred'
      );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-[#0e2a47] rounded-xl shadow-lg overflow-hidden transition-all duration-300 
                     hover:shadow-[0_0_15px_rgba(0,170,255,0.3)] p-6 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Brand Name Field */}
          <div className="space-y-2">
            <label htmlFor="brandName" className="block text-sm font-medium text-[#b3d1ff]">
              Brand Name
            </label>
            <input
              type="text"
              id="brandName"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              placeholder="e.g. Mutual Horizon"
              className="w-full px-4 py-2 bg-[#153654] border border-[#2c4766] rounded-lg 
                        text-white placeholder-[#5d718c] focus:ring-2 focus:ring-[#00aaff] 
                        focus:border-transparent transition duration-200"
              disabled={formState === FormState.LOADING}
            />
          </div>
          
          {/* Industry Field */}
          <div className="space-y-2">
            <label htmlFor="industry" className="block text-sm font-medium text-[#b3d1ff]">
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#153654] border border-[#2c4766] rounded-lg 
                        text-white focus:ring-2 focus:ring-[#00aaff] 
                        focus:border-transparent transition duration-200"
              disabled={formState === FormState.LOADING}
            >
              <option value="" className="bg-[#0e2a47]">Select an industry...</option>
              {industries.map((industryGroup) => (
                <optgroup 
                  key={industryGroup.category} 
                  label={industryGroup.category}
                  className="bg-[#0e2a47]"
                >
                  {industryGroup.options.map((option) => (
                    <option 
                      key={option} 
                      value={option}
                      className="bg-[#0e2a47]"
                    >
                      {option}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          
          {/* Region Field */}
          <div className="space-y-2">
            <label htmlFor="region" className="block text-sm font-medium text-[#b3d1ff]">
              Region
            </label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#153654] border border-[#2c4766] rounded-lg 
                        text-white focus:ring-2 focus:ring-[#00aaff] 
                        focus:border-transparent transition duration-200"
              disabled={formState === FormState.LOADING}
            >
              <option value="" className="bg-[#0e2a47]">Select a region...</option>
              {regions.map((regionGroup) => (
                <optgroup 
                  key={regionGroup.category} 
                  label={regionGroup.category}
                  className="bg-[#0e2a47]"
                >
                  {regionGroup.options.map((option) => (
                    <option 
                      key={option} 
                      value={option}
                      className="bg-[#0e2a47]"
                    >
                      {option}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          
          {/* Error Message */}
          {formState === FormState.ERROR && (
            <div className="rounded-md bg-[#331111] p-3 flex items-start">
              <AlertCircle className="text-[#ff4c4c] h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[#ff7373]">{errorMessage}</p>
            </div>
          )}
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={formState === FormState.LOADING}
            className={`w-full flex items-center justify-center py-3 px-4 rounded-lg 
                      font-medium transition-all duration-300 
                      ${formState === FormState.LOADING 
                          ? 'bg-[#153654] cursor-not-allowed text-[#8ba4c6]' 
                          : 'bg-gradient-to-r from-[#004466] to-[#006699] text-white hover:from-[#005577] hover:to-[#0077aa] hover:shadow-[0_0_10px_rgba(0,170,255,0.4)]'
                      }`}
          >
            {formState === FormState.LOADING ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                Researching...
              </>
            ) : (
              <>
                <Rocket className="-ml-1 mr-2 h-5 w-5" />
                Start Brand Research
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrandForm;