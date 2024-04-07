# math-image-transcriber

An advanced application capable of processing images of mathematical problems that contain a mix of Korean text, mathematical formulas, and graphical elements such as functions or shapes. The app intelligently identifies and separates these components within the uploaded image: 1. Korean text is transcribed as is, maintaining the original language content. 2. Mathematical expressions are detected and converted into LaTeX code, allowing for precise representation. 3. Graphs and geometric figures within the problems are preserved as images within the LaTeX document, ensuring a comprehensive and accurate conversion. This complex functionality is housed within a user-friendly interface, enabling users to upload images effortlessly and receive a LaTeX-coded document that mirrors the original problem's content, including text, equations, and visuals. The design prioritizes clarity and ease of use, with a straightforward process for uploading and converting images.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/math-image-transcriber.git
cd math-image-transcriber
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
