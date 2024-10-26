# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Gym Management System

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Routing](#routing)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The Gym Management System is a web application designed to help gym owners manage their operations effectively. It allows for member management, bill generation, notifications, and more, providing a seamless experience for both administrators and members.

## Features
- **Admin Dashboard**: For gym administrators to manage members, fees, notifications, and reports.
- **Member Management**: Add, update, and delete members.
- **Bill Generation**: Generate bills for members with a fixed amount.
- **Monthly Notifications**: Send notifications to members about their bills and gym updates.
- **Supplement Store**: Manage and sell gym supplements.
- **Diet Plans**: Provide diet plans for members.
- **User Interface**: A user-friendly interface for both admins and members.

## Technologies Used
- **Frontend**: React.js, React Router
- **Backend**: Firebase (Firestore for the database, Authentication)
- **State Management**: React Hooks
- **Styling**: CSS

## Installation
To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/<USERNAME>/<REPOSITORY>.git
2. navigate into the project using { cd FitFreak }
3. Now install all the dependencies of the project
   npm install

4. Create a .env.local file in the root directory and add your Firebase configuration:
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MSGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id

5. Start the development server:
   npm run dev 

