# Project Title

This project is a full-stack application built with the MERN stack (MongoDB, Express, React, Node.js) and various supporting libraries for functionality and styling. It includes essential backend tools like authentication, cloud storage, and payments, as well as frontend dependencies for animations, UI, and state management.

## Table of Contents
- [Project Overview](#project-overview)
- [Dependencies](#dependencies)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is designed to provide a feature-rich, modern application framework. It integrates tools for user authentication, secure storage, and payments, along with a responsive, interactive frontend.

## Dependencies

### Backend Dependencies

- **bcryptjs**: For hashing passwords and securing user credentials.
- **cloudinary**: Handles media storage, providing a cloud solution for images and videos.
- **cookie-parser**: Parses cookies to help with user session management.
- **dotenv**: Loads environment variables from `.env` files for secure configuration.
- **express**: A fast, minimalist web framework for Node.js, used for creating the server.
- **ioredis**: Used for caching and session storage, improves performance by using Redis.
- **jsonwebtoken**: Manages user authentication through token-based verification.
- **mongoose**: Provides MongoDB object modeling for seamless integration with a MongoDB database.
- **stripe**: Facilitates payment processing via the Stripe API.

### Frontend Dependencies

- **@stripe/stripe-js**: Provides Stripe’s JavaScript library for secure, frontend payment processing.
- **axios**: A promise-based HTTP client, used for API requests to the backend.
- **framer-motion**: Delivers animations and transitions for a more interactive UI.
- **immer**: Allows for immutable state management, useful for managing complex React state.
- **lucide-react**: A modern icon library compatible with React.
- **react**: The core library for building dynamic, component-based UIs.
- **react-confetti**: Adds a confetti effect to enhance user experience on special events or actions.
- **react-dom**: Provides React’s DOM manipulation functionality.
- **react-hot-toast**: Displays toast notifications, useful for providing feedback to users.
- **react-router-dom**: Offers routing functionality for navigating between pages in the app.
- **recharts**: A powerful charting library for data visualization.
- **zustand**: A lightweight state management library for managing global state in React.

### Development Dependencies

- **@vitejs/plugin-react**: Provides React support for Vite, a fast front-end build tool.
- **@types/react** and **@types/react-dom**: TypeScript definitions for React and React DOM.
- **eslint**: A tool for identifying and fixing coding issues, enforcing code standards.
- **eslint-plugin-react** and **eslint-plugin-react-hooks**: Plugins to enhance ESLint for React-specific linting.
- **eslint-plugin-react-refresh**: Adds fast refresh capabilities for React in development.
- **globals**: A library for defining global variables, used for linting.
- **tailwindcss**: A utility-first CSS framework for quickly building custom designs.
- **postcss**: A tool for transforming CSS with JavaScript, often used with Tailwind.
- **vite**: A build tool that optimizes the development and build process for frontend applications.

## Setup🚀🚀

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd project-directory
2.**install dependencies
  ```npm install

3**.**Set up environment variables: Create a .env file in the root directory and add the required environment variables as specified below.

Environment Variables
Backend:

MONGODB_URI: Connection string for MongoDB.
JWT_SECRET: Secret key for JWT authentication.
CLOUDINARY_URL: Cloudinary API URL for media storage.
REDIS_URL: Redis connection URL for caching.
STRIPE_SECRET_KEY: Stripe API key for payment processing.
Frontend:

REACT_APP_STRIPE_PUBLIC_KEY: Stripe public key for handling payments on the client side.

4.**start the development server
  ```npm run dev

##Usage📌📌

1.**Running the Backend Server: After setting up your environment variables, start the server to handle API requests and provide authentication, media storage, and payments.

2.**Accessing the Frontend: Open the frontend in development mode by running npm run dev in a separate terminal window. You can then access the app in your browser at the address provided by Vite (usually http://localhost:3000).

3**.Managing State: The app uses Zustand for state management on the frontend, making it easy to share data across components. Authentication, product listings, and cart management are handled using this state library.

4.**Using the Stripe Payment Gateway: Ensure you have your STRIPE_SECRET_KEY and REACT_APP_STRIPE_PUBLIC_KEY configured to enable Stripe payments. Test payments can be made using Stripe’s test card numbers.

FOLDER STRUCTURE :
├── backend             # Backend server code (Express, Mongoose)
│   ├── controllers     # Controller functions for handling routes
│   ├── models          # Mongoose models for database
│   ├── routes          # Express routes
│   └── utils           # Utility functions and middleware
│
├── frontend            # Frontend client code (React, Zustand, Tailwind)
│   ├── components      # Reusable UI components
│   ├── pages           # Page components for each route
│   ├── hooks           # Custom hooks for data fetching and state
│   └── stores          # Zustand stores for state management
│
└── README.md           # Project documentation

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
