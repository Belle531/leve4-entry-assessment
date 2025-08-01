# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Level 4 – Entry Assessment

This project includes:

- A React "About Me" page (`src/components/AboutMe.jsx`)
- A JavaScript unique characters challenge (`uniqueCharacters.js`)

## To Run the React App

sh
npm install
npm run dev

## To Test the JavaScript Challenge

sh
node uniqueCharacters.js

## Folder Structure

project-root/
├── uniqueCharacters.js
└── src/
    ├── App.jsx
    ├── index.js
    └── components/
      └── AboutMe.jsx
