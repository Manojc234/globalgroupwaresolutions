Overview
This is a User Management System with a login page, user list page, and features like updating and deleting users. It is designed to be responsive and uses HTML, CSS, and JavaScript for interaction. The project fetches data from an API for users and provides dynamic user management capabilities.

Project Structure
index.html: Homepage with an introductory card.
login.html: Login page with form for signing in.
userlist.html: Displays the list of users, with options to update or delete.
styles.css: Global CSS file for styling the pages.
script.js: JavaScript file for handling dynamic actions on the user list page.
images/: Folder containing images used in the project.
Dependencies
React: A JavaScript library for building user interfaces.
axios: Promise-based HTTP client for the browser and Node.js (for fetching user data from the API).
Bootstrap: Front-end framework for building responsive, mobile-first websites.
SweetAlert2: A library for beautiful, responsive, customizable alerts.

To Install Dependencies
Clone the repository:
git clone https://github.com/your-repository.git
cd your-repository

Install dependencies using npm:
npm install

Start the React development server:
npm start

Your React app will be available at http://localhost:3000.

Overview of Pages
1. Login Page (login.html)
Allows the user to log in with username and password.
Responsive layout with styled form inputs.
Features include validation for form inputs.
2. User List Page (userlist.html)
Displays a list of users in card format.
Each user card shows the user's avatar, name, and email.
Options to update and delete users. On clicking "Update," the user details are displayed for editing.
Includes a back button to navigate back to the homepage.
Utilizes alert notifications on user deletion and updates.
3. Homepage (index.html)
Contains an introductory card with a button linking to the login page.
Designed to welcome users before they navigate to the login page.
