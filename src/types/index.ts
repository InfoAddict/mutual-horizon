// Form input types
export interface BrandFormData {
  brandName: string;
  industry: string;
  region: string;
}

// API response type
export interface ApiResponse {
  reply: string;
}

// Form submission states
export enum FormState {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

// Industry categories and subcategories
export const industries = [
  {
    category: "Technology",
    options: [
      "Software Development",
      "Cloud Computing",
      "Artificial Intelligence",
      "Cybersecurity",
      "SaaS",
      "Hardware Manufacturing",
      "IT Services",
      "Telecommunications"
    ]
  },
  {
    category: "Financial Services",
    options: [
      "Banking",
      "Insurance",
      "Investment Management",
      "FinTech",
      "Cryptocurrency",
      "Financial Advisory",
      "Payment Processing"
    ]
  },
  {
    category: "Healthcare",
    options: [
      "Healthcare Providers",
      "Medical Devices",
      "Pharmaceuticals",
      "Biotechnology",
      "Healthcare IT",
      "Mental Health Services",
      "Telemedicine"
    ]
  },
  {
    category: "Retail & E-commerce",
    options: [
      "Online Retail",
      "Brick and Mortar Retail",
      "Fashion & Apparel",
      "Consumer Electronics",
      "Luxury Goods",
      "Marketplace Platforms"
    ]
  },
  {
    category: "Media & Entertainment",
    options: [
      "Digital Media",
      "Gaming",
      "Streaming Services",
      "Social Media",
      "Publishing",
      "Advertising",
      "Film & Television"
    ]
  },
  {
    category: "Professional Services",
    options: [
      "Consulting",
      "Legal Services",
      "Marketing & Advertising",
      "Business Process Outsourcing",
      "Human Resources",
      "Accounting & Tax"
    ]
  },
  {
    category: "Manufacturing",
    options: [
      "Automotive",
      "Aerospace",
      "Electronics",
      "Industrial Equipment",
      "Consumer Goods",
      "Chemical Manufacturing"
    ]
  },
  {
    category: "Real Estate",
    options: [
      "Commercial Real Estate",
      "Residential Real Estate",
      "Property Management",
      "Real Estate Technology",
      "Construction",
      "Architecture"
    ]
  }
];

// Regions and their markets
export const regions = [
  {
    category: "Global",
    options: ["International / Global"]
  },
  {
    category: "Americas",
    options: [
      "North America",
      "United States",
      "Canada",
      "Latin America",
      "Brazil",
      "Mexico",
      "Caribbean"
    ]
  },
  {
    category: "Europe",
    options: [
      "European Union",
      "United Kingdom",
      "Western Europe",
      "Eastern Europe",
      "Nordic Countries",
      "Mediterranean"
    ]
  },
  {
    category: "Asia-Pacific",
    options: [
      "East Asia",
      "China",
      "Japan",
      "South Korea",
      "Southeast Asia",
      "India",
      "Australia & New Zealand"
    ]
  },
  {
    category: "Middle East & Africa",
    options: [
      "Middle East",
      "Gulf States",
      "North Africa",
      "Sub-Saharan Africa",
      "South Africa"
    ]
  }
];