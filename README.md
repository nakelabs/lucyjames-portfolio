# Lucy James Abagi - Portfolio

A modern, responsive portfolio website showcasing the professional journey, achievements, and leadership philosophy of Lucy James Abagi. This elegant portfolio highlights her role as a visionary leader and strategic innovator at PPDC.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Sections**: 
  - Hero section with professional introduction
  - Comprehensive biography
  - PPDC work and achievements
  - Lifestyle and personal interests
  - Photo gallery
  - Contact information
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Dark/Light Mode**: Theme switching capability
- **Performance Optimized**: Built with Vite for fast loading and development
- **Accessibility**: WCAG compliant design with proper semantic markup

## 🚀 Live Demo

[View Live Portfolio](https://lucyjames-portfolio.vercel.app/) 

## 📱 Screenshots

<img width="1919" height="952" alt="image" src="https://github.com/user-attachments/assets/d8769b95-3358-4ea7-adc8-fe498a79fbbb" />


## 🛠️ Technology Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and development server

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Additional Libraries
- **TanStack Query** - Data fetching and caching
- **React Day Picker** - Date selection
- **Recharts** - Chart components
- **Sonner** - Toast notifications

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/nakelabs/lucyjames-portfolio.git
   cd lucyjames-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the portfolio

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## 📁 Project Structure

```
lucyjames-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── BiographySection.tsx
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── assets/            # Images and other assets
│   └── main.tsx           # Application entry point
├── components.json        # shadcn/ui configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 🤝 Contributing

We welcome contributions to improve the portfolio! Here's how you can help:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test your changes**
   ```bash
   npm run dev
   npm run build
   npm run lint
   ```
5. **Commit with descriptive messages**
   ```bash
   git commit -m "Add: new feature description"
   ```
6. **Push and create a Pull Request**

### Development Options

#### Option 1: Local Development
Follow the [Getting Started](#getting-started) guide above.

#### Option 2: GitHub Codespaces
1. Click the "Code" button in the repository
2. Select the "Codespaces" tab
3. Click "New codespace"
4. Develop directly in the browser-based IDE

#### Option 3: Direct GitHub Editing
1. Navigate to the file you want to edit
2. Click the pencil icon (Edit button)
3. Make your changes and commit

## 🐛 Troubleshooting

### Common Issues

**Build fails with missing dependencies**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Framer Motion animations not working**
```bash
# Ensure Framer Motion is properly installed
npm install framer-motion
```

**TypeScript errors**
```bash
# Check TypeScript configuration
npm run lint
```

**Port already in use**
```bash
# Kill process using port 8080
npx kill-port 8080
# Or start on different port
npm run dev -- --port 3000
```

### Performance Issues
- Ensure you're using the production build for deployment
- Check browser console for any JavaScript errors
- Verify all images are optimized

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Lucy James Abagi**
- Portfolio: [Live Site](https://lucyjames-portfolio.vercel.app/)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/lucy-abagi-a94a98128/)

---

<p align="center">
  <strong>Built with ❤️ using React, TypeScript, and Tailwind CSS</strong>
</p>
