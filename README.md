# Personal Portfolio Website

A responsive portfolio website built with React and TypeScript, featuring smooth animations and a modern design.

## Features

- Responsive design that works on all devices
- Dark/light theme toggle
- Smooth animations with Framer Motion
- Interactive elements and hover effects
- Optimized for performance

## Tech Stack

- React 18
- TypeScript
- Framer Motion
- React Icons
- CSS3 with custom variables
- GitHub Pages deployment

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd personal_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages

## Deployment to GitHub Pages

1. Install gh-pages package (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to your package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Project Structure

```
src/
├── components/          # React components
├── contexts/           # React contexts (theme)
├── App.tsx            # Main app component
├── index.tsx          # Entry point
└── index.css          # Global styles

public/
├── images/            # Image assets
├── resume/            # Resume files
└── index.html         # HTML template
```

## Customization

- Update personal information in the component files
- Modify colors by changing CSS variables in `src/index.css`
- Replace images in `public/images/`
- Update resume file in `public/resume/` 