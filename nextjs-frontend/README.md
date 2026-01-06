# Bikin - Modern Landing Page Frontend

This is the Next.js frontend for the Bikin landing page project.

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
cd nextjs-frontend
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `pages/` - Next.js pages and API routes
- `components/` - React components
- `styles/` - Global CSS and Tailwind styles
- `public/` - Static assets

## Environment Variables

Create a `.env.local` file in the frontend directory:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Features

- ✅ Responsive navigation bar
- ✅ Hero section with CTA buttons
- ✅ Features showcase (4 cards)
- ✅ Mobile-friendly design
- ✅ Tailwind CSS styling
- ✅ API integration with FastAPI backend
