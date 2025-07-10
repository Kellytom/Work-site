# Work - Static Site

A modern, fast website built with static HTML, CSS, and JavaScript.

## 🚀 Features

- **Fast Performance**: Optimized static HTML for lightning-fast loading
- **No Dependencies**: Works without Node.js or build tools
- **Modern Design**: Beautiful, responsive design with glass morphism effects
- **SEO Optimized**: Clean HTML structure for search engines
- **Interactive**: Smooth animations and hover effects

## 📦 Project Structure

```
work/
├── public/
│   └── favicon.svg
├── src/
│   └── pages/
│       └── index.astro
├── index.html              # Main static HTML file
├── dev-server.bat          # Windows development server
├── dev-server.sh           # Linux/Mac development server
├── astro.config.mjs        # Astro config (for future use)
├── package.json            # Dependencies (for future use)
└── tsconfig.json           # TypeScript config (for future use)
```

## 🛠️ Getting Started

### Option 1: Open Directly
Simply double-click `index.html` to open the site in your browser.

### Option 2: Local Development Server
For a better development experience:

**Windows:**
```bash
dev-server.bat
```

**Linux/Mac:**
```bash
chmod +x dev-server.sh
./dev-server.sh
```

This will start a local server at `http://localhost:8000` (requires Python).

### Option 3: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `index.html`              | Open the site directly in your browser          |
| `dev-server.bat`          | Start local dev server (Windows)                |
| `dev-server.sh`           | Start local dev server (Linux/Mac)              |
| `npm install`             | Install dependencies (when internet available)   |
| `npm run dev`             | Start Astro dev server (when deps installed)    |
| `npm run build`           | Build production site (when deps installed)     |

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🎨 Customization

The site features a modern design with:
- Gradient backgrounds
- Glass morphism effects
- Responsive grid layouts
- Modern typography

Feel free to customize the styling in `src/pages/index.astro` or create new components in `src/components/`.

## 🚢 Deployment

This Astro site can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your project for seamless deployment
- **GitHub Pages**: Use the built-in GitHub Actions workflow
- **Static hosting**: Upload the `dist/` folder to any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
