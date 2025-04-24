# Mutual Horizon - Brand Research Tool

A modern web application for researching brand viability across domain availability, digital competition, and IP/copyright considerations.

## Features

- Brand name research and validation
- Industry-specific analysis with comprehensive industry categories
- Regional market analysis with global coverage
- Beautiful, responsive UI with dark mode
- PDF export functionality
- Copy-to-clipboard support
- Real-time API integration

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons
- HTML2PDF.js
- React Markdown

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/mutual-horizon.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Deployment to Cloudflare Pages

1. Push your code to GitHub

2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com)

3. Navigate to **Pages** > **Create a project** > **Connect to Git**

4. Select your GitHub repository

5. Configure your build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables (if needed):
     ```
     NODE_VERSION: 18
     ```

6. Click **Save and Deploy**

Your site will be deployed to a `.pages.dev` domain. You can add a custom domain in the Pages project settings.

## Project Structure

```
mutual-horizon/
├── src/
│   ├── components/      # React components
│   ├── theme/          # Theme configuration
│   ├── types/          # TypeScript types
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── package.json        # Project dependencies
```

## License

MIT