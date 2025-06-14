# QIL Landing Page

A modern, responsive landing page built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Vite for fast development and building
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework with custom animations
- **EJS Templates**: Server-side templating for dynamic content
- **Responsive Design**: Mobile-first approach with smooth scrolling
- **Animations**: AOS (Animate On Scroll) library for engaging user experience

## 🛠️ Tech Stack

- **Build Tool**: Vite 6.0.5
- **Language**: TypeScript 5.6.2
- **Styling**: Tailwind CSS 4.0.0 with PostCSS
- **Templating**: EJS 3.1.10
- **Animations**: AOS 2.3.4
- **Package Manager**: pnpm (recommended based on lock file)

## 📁 Project Structure

```
qil-landing-page/
├── src/
│   ├── templates/
│   │   └── sections/        # EJS template sections
│   ├── main.ts             # Main TypeScript entry point
│   ├── style.css           # Global styles
│   └── vite-env.d.ts       # Vite type definitions
├── public/                 # Static assets
├── dist/                   # Build output
├── index.html              # Main HTML template
├── package.json
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.mjs      # PostCSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd qil-landing-page
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

### Development

Start the development server:

```bash
pnpm dev
# or
npm run dev
```

The development server will start at `http://localhost:5173` (or the next available port).

### Building for Production

Build the project for production:

```bash
pnpm build
# or
npm run build
```

The built files will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
pnpm preview
# or
npm run preview
```

## 📄 Page Sections

The landing page includes the following sections:

- **Header**: Navigation and branding
- **Hero**: Main call-to-action section
- **Features**: Product/service features showcase
- **Learning Materials**: Educational content section
- **Analytics**: Data and insights section
- **Pricing**: Pricing plans and options
- **Contact**: Contact form and information
- **Footer**: Additional links and information

## 🎨 Styling

This project uses Tailwind CSS with:
- Custom animations via `tailwindcss-animate`
- Smooth scrolling behavior
- Responsive design patterns
- Custom color scheme with semantic naming (background, foreground, etc.)

## 🔧 Configuration

- **Vite**: Configured with TypeScript and EJS plugin support
- **Tailwind**: Version 4.0 with PostCSS integration
- **TypeScript**: Strict mode enabled with modern ES modules
- **EJS**: Template engine for dynamic content rendering

## 📝 Scripts

- `dev`: Start development server with hot reload
- `build`: Build for production (TypeScript compilation + Vite build)
- `preview`: Preview production build locally

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and not intended for public distribution.

## 🆘 Support

If you encounter any issues or have questions, please create an issue in the repository or contact the development team.