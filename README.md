# Ivan Dax - Personal CV Website

A clean, mobile-first CV website built with React and Vite, showcasing my professional experience as a Senior Frontend Engineer.

**Live Site:** [ivandax-cv.web.app](https://ivandax-cv.web.app/)

## About

This project is a web-based version of my professional CV, designed with simplicity and elegance in mind. The site features a responsive layout that works seamlessly across all devices, from mobile phones to desktop screens.

## Features

- **Mobile-First Design**: Optimized for mobile devices with responsive breakpoints for tablets and desktops
- **Clean & Elegant UI**: Simple black and white design with subtle gray accents
- **Responsive Layout**: Two-column layout on desktop, single-column on mobile
- **Professional Sections**:
  - Work Experience with detailed role descriptions
  - Education background
  - Technical Skills organized by category
  - Contact information and links
  - Language proficiencies

## Tech Stack

- **React** 18.3.1 - UI library
- **Vite** 6.0.7 - Build tool and dev server
- **React Router DOM** 7.11.0 - Client-side routing
- **Firebase** 11.1.0 - Hosting and deployment
- **CSS3** - Custom styling with mobile-first approach

## Project Structure

```
src/
├── views/
│   ├── Home.jsx       # Main CV component
│   └── Home.css       # CV styling
├── images/
│   └── ivan.jpg       # Profile photo
├── App.jsx            # Main app component
└── index.jsx          # Entry point
```

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd ivandax

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:3000` (or next available port).

## Deployment

This project is deployed on Firebase Hosting. To deploy:

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

## Design Philosophy

The CV website follows these design principles:

- **Simplicity**: Clean, distraction-free layout focusing on content
- **Readability**: High contrast (black on white) for optimal readability
- **Responsiveness**: Mobile-first approach ensuring great UX on all devices
- **Accessibility**: Semantic HTML and proper link handling (external links open in new tabs)
- **Print-Friendly**: Optimized print styles for PDF generation

## Contact

- **Email**: ivandariogye@gmail.com
- **GitHub**: [github.com/ivandax](https://github.com/ivandax)
- **Location**: Barcelona, Spain

---

Built using React and Vite
