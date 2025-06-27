# AI News &nbsp; ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

> **AI News is a modern, AI-powered news aggregator built with React, TypeScript, and Vite.**

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [ESLint & Code Quality](#eslint--code-quality)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- ⚡️ **Fast**: Powered by Vite for instant HMR and lightning-fast builds.
- 🧠 **AI Integration**: Aggregates and summarizes news using AI.
- 🛠️ **Type Safe**: Built with TypeScript for robust type safety.
- 🧹 **Linted**: Pre-configured with ESLint for code quality.
- 🌐 **Cross-Platform**: Works seamlessly in modern browsers.
- 🔌 **Pluggable**: Easily extendable and customizable.

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/islamux/ai-news.git
   cd ai-news
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## Development

This project uses [Vite](https://vitejs.dev/) for development and build tooling, with [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/).

### Scripts

- `npm run dev` – Start development server with HMR
- `npm run build` – Build for production
- `npm run lint` – Run ESLint

---

## ESLint & Code Quality

The project is pre-configured with ESLint and recommended plugins for React and TypeScript.  
You can expand the ESLint configuration for stricter rules and type-aware linting as shown below:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests via [GitHub](https://github.com/islamux/ai-news-extension).

---

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

---

> © 2025 [islamux](https://github.com/islamux) – AI News
