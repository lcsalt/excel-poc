# React + TypeScript + Vite + CSSModules + Mantine

This project is a starter template for building a React application with TypeScript, Vite, CSS Modules, and Mantine. It includes a set of commonly used libraries and a predefined folder structure to help you get started quickly.

## Folder Structure

The project is organized into the following folders:

```
/src
  /assets # Static assets like images, fonts, etc.
  /components # Reusable React components.
    /common # Agnostic from Application.
    /application # Made for this Application.
  /hooks # Custom React hooks.
  /services # External systems integrations like firebase.
  /utils # Utility functions and helpers.
  /hocs # Higher-order components for enhancing existing components.
  /contexts # React Contexts for global state management.
  /pages # Top-level React components representing different pages.
  /styles # Global and shared styles. Mantine Theme.
  /types # TypeScript type definitions and interfaces.
  /tests # Unit and integration tests.
  /store # State management (could be for Redux, Zustand, etc.).
  /routes # React Router configurations.
  /translation # Files related to internationalization.
  /libs # Any third-party libraries or wrappers.
  /api # API endpoints and services.
```

## Libraries

The project integrates several key libraries:

- **Mantine**: A React component library with built-in theming, making it easy to build and style modern UIs. The template includes `@mantine/core`, `@mantine/hooks`, `@mantine/dates`, `@mantine/dropzone`, and `@mantine/form` to provide a comprehensive set of UI components, date handling, file drop zones, and form management.
  Refs: https://mantine.dev/overview/, https://mantine.dev/styles/style-props/, https://mantine.dev/form/use-form/, https://mantine.dev/dates/getting-started/, https://mantine.dev/x/dropzone/,

- **tabler/icons**: [Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.](https://tabler.io/icons).

- **Vite**: A fast build tool that provides instant server startup and lightning-fast HMR (Hot Module Replacement) for a great development experience.

- **TypeScript**: Static type checking to catch errors early and improve code quality.

- **CSS Modules**: Scoped CSS that helps avoid style conflicts by generating unique class names for each component.

- **React Router DOM**: Manages routing within your application, providing dynamic route matching and easy navigation.

- **Axios**: A promise-based HTTP client to handle API requests efficiently.

- **Socket.io-client**: Enables real-time, bidirectional communication between clients and servers, useful for chat apps, live notifications, etc.

- **Day.js**: A lightweight date library to parse, validate, manipulate, and display dates.

- **dotenv**: Loads environment variables from a `.env` file into `process.env`, allowing you to separate secrets from your source code.

- **Vite Plugin Compression**: Enables compression (e.g., gzip) for your Vite build output to optimize loading times.

## Theming with Mantine

The project uses Mantine's theming capabilities to provide a consistent look and feel across the application. The theme can be customized by altering colors, fonts, spacing, and other design tokens. This customization is configurated on `src/styles/theme` and is added on `<MantineProvider theme={theme}>` on the index file, allowing you to manage and switch themes globally across the application.
Ref: https://mantine.dev/theming/mantine-provider/

## Scripts

The `package.json` includes several useful scripts:

- **dev**: Starts the Vite development server.
- **build**: Compiles the TypeScript code and builds the application for production.
- **lint**: Runs ESLint to ensure code quality and consistency.
- **preview**: Previews the production build locally.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Start the development server using `npm run dev` or `yarn dev`.
4. Open your browser and navigate to `http://localhost:3000`.
