---
                             #Cricket Tournament :-VIRATIAN

# CricketTournament-Website Live : https://cricket-tournament-website-8pjp-fjeukijmh.vercel.app/

## Setup Instructions

### Prerequisites

TechStack: Vite-ReactJs,NodeJs,JavaScript,ExpressJs,Mongoose,Tailwind Css, Css

Make sure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/en/)
- **Yarn**: Install globally using `npm install -g yarn`

### Starting Frontend

The frontend is located in the `frontend/` directory, and it is built using React.

1. **Install dependencies**:
   cd fontend
   yarn install
   Start the development server:
   bash
   Copy code
   yarn dev
   This will start the client-side application, typically running on http://localhost:5173.

Starting Backend
The backend is located in the backend/ directory and is a Node.js server that handles API requests and form submissions.

Install dependencies:

cd backend
yarn install
Start the server:

node server.js
The backend will start on http://localhost:8000, which handles all form submissions from the frontend.

File Detailing
Frontend Structure
The frontend/ folder contains the client-side code of the project. Below is a detailed breakdown:

pages/: Contains individual page components like the homepage, registration form, and thank you page.
assets/: This folder contains images, fonts, and other static assets used in the frontend.

PhotoAnimation/: This contains the animation background

layout/: This file contains the layout which handle the routes

loader/: This contains the loader animation

Register/: This contains the registration of the user

Routes/: This handles the routes

SharedPages/: This contains the navbar and the footer

main.jsx /: All component are rendered here

The role of the instructor in the application is known as the collaborator, responsible for managing and overseeing the registration process.

Backend Structure
The backend/ folder contains the server-side code, and it handles form submissions.

server.js: This is the main file that runs the backend server. It listens for POST requests from the frontend and processes form data (such as user registration information).
This backend uses a basic Node.js setup to handle data submission and provides necessary endpoints for the frontend.

Contributors
Instructors: Referred to as Collaborators in the project, they oversee and manage the registration and tournament process.
Developers: Full-stack team responsible for building and maintaining the project.
markdown
Copy code

### Key Sections Explained:

1. **Project Structure**:

   - Provides a high-level overview of the frontend and backend folders and their respective contents.

2. **Setup Instructions**:

   - Step-by-step instructions to install dependencies and run both the frontend and backend.

3. **File Detailing**:

   - Detailed explanation of the key folders in both the frontend and backend, including their purpose and what they contain.

4. **Contributors**:
   - This section explains the role of instructors (collaborators) and developers in the project.


