# Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- Responsive design for mobile, tablet, and desktop
- Smooth scroll animations using Framer Motion
- Modern UI with Tailwind CSS
- Component-based architecture
- Pixel-perfect implementation of Figma design

## Prerequisites

- Node.js 14.0.0 or later
- npm 6.14.0 or later

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
portfolio/
├── public/
│   └── images/          # Project images
├── src/
│   ├── components/      # React components
│   ├── App.js          # Main app component
│   └── index.js        # Entry point
├── package.json        # Dependencies and scripts
└── tailwind.config.js  # Tailwind CSS configuration
```

## Design Tokens

The project uses a consistent design system with the following tokens:

### Colors
- Primary: #2563EB (Blue-600)
- Secondary: #4B5563 (Gray-600)
- Background: #FFFFFF, #F3F4F6 (Gray-100)
- Text: #111827 (Gray-900), #6B7280 (Gray-500)

### Typography
- Font Families: Inter (sans-serif), Poppins (display)
- Font Sizes: From 14px to 64px with specific line heights

### Spacing
- Section: 96px
- Container: 32px
- Stack: 16px, 24px, 32px

### Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## License

MIT 