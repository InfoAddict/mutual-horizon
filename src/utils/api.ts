import { BrandFormData, ApiResponse } from '../types';

// API endpoint for brand research
const API_ENDPOINT = 'https://n8n.infoaddict.com/webhook/194df132-7624-4866-a286-2e109986e516';

// Timeout duration in milliseconds (2 minutes)
const TIMEOUT_DURATION = 120000;

/**
 * Creates a promise that rejects after a specified timeout
 */
const createTimeout = (ms: number): Promise<never> => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timed out after 2 minutes')), ms);
  });
}

/**
 * Submits brand research data to the API
 * @param data The form data to submit
 * @returns Promise with the API response
 */
export const submitBrandResearch = async (data: BrandFormData): Promise<ApiResponse> => {
  try {
    // Create a race between the fetch and a timeout
    const response = await Promise.race([
      fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
      createTimeout(TIMEOUT_DURATION),
    ]);

    // Check if response is a Response object (not a timeout error)
    if (response instanceof Response) {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } else {
      // This shouldn't happen due to the race, but TypeScript needs it
      throw new Error('Unknown response type');
    }
  } catch (error) {
    console.error('Error submitting brand research:', error);
    throw error;
  }
};