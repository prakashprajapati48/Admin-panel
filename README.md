🚀 Admin Panel

An Admin Panel built with React and Vite, providing a fast, modern development environment with HMR, ESLint integration, and the new React Compiler enabled by default.

📦 Tech Stack

React 18

Vite (super-fast dev server + build tool)

React Compiler (experimental, improves performance/ DX)

ESLint (code quality & linting rules)

JavaScript / JSX

⚙️ Features

🔥 Fast Refresh with Vite

⚡ Lightning-fast builds

🧹 ESLint ready (configurable for production)

🔧 Supports both:

@vitejs/plugin-react (Babel / oxc)

@vitejs/plugin-react-swc (SWC)

🧪 Compatible with additional tooling like Tailwind, Zustand, Redux Toolkit, etc.

📁 Project Structure
    
    admin-panel/
      │
      ├── public/                     # Static public assets
      │
      ├── src/                        # Application source code
      │   ├── components/             # Reusable UI components
      │   ├── pages/                  # Page-level components (Dashboard, Login, etc.)
      │   ├── App.jsx                 # Root React component
      │   └── main.jsx                # Application entry point
      │
      ├── .gitignore                  # Files & folders ignored by Git
      ├── README.md                   # Project documentation
      ├── eslint.config.js             # ESLint configuration
      ├── index.html                  # Main HTML template
      ├── package-lock.json            # Dependency lock file
      ├── package.json                 # Project dependencies & scripts
      └── vite.config.js               # Vite configuration file

🚀 Getting Started
1️⃣ Install Dependencies
npm install

2️⃣ Start Dev Server
npm run dev

3️⃣ Build for Production
npm run build

4️⃣ Preview Production Build
npm run preview

🔧 React Compiler

This template ships with the React Compiler enabled.
Learn more: https://react.dev/learn/react-compiler

⚠️ Note: This may impact Vite dev/build performance.

🧹 ESLint Configuration

If you plan to scale this into a production-grade project, consider using TypeScript with type-aware linting:

🔗 https://typescript-eslint.io

🔗 Vite React + TS Template:
https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
