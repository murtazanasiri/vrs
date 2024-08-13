# Vehicle Reservation System (VRS) Application

## Introduction

Welcome to the Vehicle Reservation System (VRS) application README. This document serves as comprehensive documentation for our project, including planning, development progress, and final outcomes.

## Application Scope

The Vehicle Reservation System (VRS) is designed to streamline the process of reserving vehicles within a company. It caters to various departments within the organization, allowing employees to request vehicles for different purposes such as meetings, appointments, or sickness. The application follows a structured flow where requests are submitted by employees, reviewed by department heads, and finalized by the transport and security teams. This ensures efficient allocation of resources while maintaining safety and security standards.

## Planning Documentation

## Technologies

The VRS application is built using the MERN stack, which stands for MongoDB, Express.js, React, and Node.js.

- **MongoDB**: MongoDB is a NoSQL database used for storing and managing data. In our application, MongoDB is used to store user information, vehicle details, reservation requests, and other relevant data.

- **Express.js**: Express.js is a web application framework for Node.js that provides a robust set of features for building web applications and APIs. In our application, Express.js is used to create the backend server, define API routes, and handle HTTP requests.

- **React**: React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the UI in response to user interactions. In our application, React is used to build the frontend user interface, including pages, components, and navigation.

- **Node.js**: Node.js is a JavaScript runtime environment that allows developers to run JavaScript code on the server-side. In our application, Node.js is used to run the backend server and handle server-side logic, such as user authentication, request processing, and database operations.

### Structure of the Application

- **Frontend**:
  - **src**
    - **Assets Folder**: Contains images and wrappers for styled components.
    - **Components Folder**: Contains all reusable components.
    - **Pages Folder**: Contains different pages for the VRS application.
- **Backend**:
  - **src**
    - **Utils Folder**: Manages the utilities for appliction.
    - **Models Folder**: Defines the schema for MongoDB collections.
    - **Routes Folder**: Defines API routes.

### Component's Planning

- **Navbar Component**: Navigation for easy access to different sections of the application.
- **Vehicle Request Form Component**: Allows users to submit vehicle reservation requests.
- **Admin Dashboard Component**: Provides an overview of pending requests and allows admins to approve or reject requests.
- **Login Page**: Allows users to authenticate and log into the system.
- **User Registration Page**: Allows new users to register for an account.
- **Dashboard Page**: Displays an overview of the user's requests and notifications.
- **New Request Page**: Allows users to create a new vehicle reservation request.
- **All Requests Page**: Displays all vehicle reservation requests.
- **Edit Request Page**: Allows users to edit their existing vehicle reservation requests.
- **Request Action Component**: Handles actions related to vehicle reservation requests.
- **HOD Action Component**: Handles actions specific to Head of Department users.
- **Transport Action Component**: Handles actions related to vehicle transport arrangements.
- **Security Action Component**: Handles actions related to security review.
- **Big Sidebar Component**: Provides a large sidebar for navigation.
- **Details Container Component**: Displays detailed information for requests.
- **NavLinks Component**: Navigation links for the sidebar.
- **FormRow Component**: A reusable row component for forms.
- **Logo Component**: Displays the logo of the application.
- **Theme Toggles Component**: Allows users to toggle between light and dark mode themes.

### APIs and NPMs Used

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **React Router DOM**: Declarative routing for React.
  - **Axios**: Promise-based HTTP client for making requests to the backend.
  - **Styled Components**: A CSS-in-JS library for styling React components.
  - **Day.js**: A minimalist JavaScript library for parsing, validating, manipulating, and displaying dates and times.
  - **Recharts**: A composable charting library built on React components.
  - **React Toastify**: React component for toast notifications.
  - **Web Vitals**: Library for tracking and analyzing performance metrics on your website.
- **Backend**:

  - **Express**: Fast, unopinionated, minimalist web framework for Node.js.
  - **Mongoose**: Elegant MongoDB object modeling for Node.js.
  - **JSON Web Token (jsonwebtoken)**: Implementation of JSON Web Tokens for authentication.
  - **Bcrypt**: Library for hashing passwords.
  - **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
  - **Dotenv**: Module for loading environment variables from a .env file.
  - **Cookie Parser**: Middleware for parsing cookies in Express.
  - **Morgan**: HTTP request logger middleware for Node.js.

  ### Backend Planning

- **User Model (User.js)**: Defines the schema for user data including username, password, email, role, and other relevant details.
- **Role Model (Role.js)**: Defines the schema for user roles to manage access control within the system.
- **Vehicle Model (Vehicle.js)**: Defines the schema for vehicle data including type, model, license plate, and availability status.
- **Reservation Request Model (ReservationRequest.js)**: Defines the schema for vehicle reservation requests, including requester, department, request status, and timestamps.
- **Driver Model (Driver.js)**: Defines the schema for driver data including name, license number, and availability.
- **Department Model (Department.js)**: Defines the schema for department data including name and HOD details.

### Backend Routes and Endpoints

- **Auth Routes (auth.js)**: Handles user authentication and authorization, including login, registration, and token generation.
- **Auth Middleware (authMiddleware.js)**: Middleware for verifying JWT tokens and protecting routes that require authentication.
- **Request Routes (request.js)**: Defines API endpoints for handling vehicle reservation requests, including submission, approval, rejection, and editing.
- **HOD Routes (hodRoutes.js)**: Handles actions specific to Head of Department users, such as viewing and approving requests from their department.
- **Transport Routes (transportRoutes.js)**: Defines API endpoints for managing vehicle transport arrangements, including driver assignment and vehicle allocation.
- **Security Routes (securityRoutes.js)**: Handles security-related actions, such as safety reviews and approval of requests.

## Backend Routes and Endpoints

### Authentication Routes (/api/auth)

- **POST /login**: Handles user login authentication. Users provide their email and password to authenticate and receive a JWT token upon successful authentication.
- **POST /register**: Registers a new user in the system. Users provide their details such as name, email, password, role, and department to create an account.

### Request Routes (/api/request)

- **POST /new-request**: Allows authenticated users to create a new vehicle reservation request. Users provide details such as start location, destination, purpose, passenger name, and travel date.
- **GET /**: Retrieves all requests based on the user's role. The requests returned vary depending on the user's role, such as requester, HOD, transport, or security.
- **GET /:id**: Retrieves a specific request by its ID, including user details. This endpoint provides detailed information about a particular request, including the user who made the request.
- **PUT /:id**: Allows users to edit a specific request. Users can update details such as start location, destination, purpose, passenger name, and travel date.
- **DELETE /:id**: Allows users to delete a specific request. Only the requester who created the request can delete it.

### HOD Routes (/api/hod)

- **GET /requests**: Retrieves all requests for the HOD's department. Only HOD users can access this endpoint, and it returns requests that are awaiting HOD approval.
- **PUT /approve/:id**: Allows HOD users to approve or reject a request. The HOD can provide comments and mark the request as approved or rejected.

### Transport Routes (/api/transport)

- **GET /requests**: Retrieves all approved requests for transport assignment. Only transport users can access this endpoint, and it returns requests that are approved by HOD and awaiting transport assignment.
- **GET /drivers**: Retrieves all available drivers for transport assignment.
- **GET /vehicles**: Retrieves all available vehicles for transport assignment.
- **PUT /assign/:id**: Allows transport users to assign a driver and vehicle to a request. The transport user can provide comments and mark the request as assigned.

### Security Routes (/api/security)

- **GET /requests**: Retrieves all requests for security approval. Only security users can access this endpoint, and it returns requests that are assigned to transport and awaiting security approval.
- **PUT /approve/:id**: Allows security users to approve or reject a request. The security user can provide comments and mark the request as approved or rejected.

## Additional Application Specifications or Functionalities

### Dark Mode Theme

The application supports a dark mode theme, providing users with an alternative color scheme for better readability and reduced eye strain, especially in low-light environments.

### Small Sidebar or Mobile Menu for Mobile Size

To optimize the user experience for mobile devices, the application features a small sidebar or mobile menu that collapses when viewed on smaller screens. This ensures easy navigation and access to important features even on mobile devices.

## Development Progress

## Development Progress

### Backend Development

#### Designing Models

1. **Step 1**: Designed and implemented models for users, roles, departments, vehicles, reservation requests, and drivers using Mongoose schema.

#### Designing Endpoints

2. **Step 2**: Defined API endpoints for user authentication, registration, and request handling using Express.js.
3. **Step 3**: Implemented routes for login, registration, and CRUD operations for reservation requests.

#### Defining Routes

4. **Step 4**: Set up routes for authentication, registration, and request handling.
5. **Step 5**: Implemented middleware for authentication and authorization.
6. **Step 6**: Created routes for handling user login, registration, and CRUD operations for reservation requests.

### Frontend Development

#### Login and Registration

7. **Step 7**: Implemented login and registration functionality using React components.
8. **Step 8**: Created forms for user input and integrated with backend API endpoints for authentication and registration.

#### Routing

9. **Step 9**: Implemented routing using React Router.
10. **Step 10**: Set up navigation between login, registration, dashboard, and requester pages.
11. **Step 11**: Implemented private routes to protect authenticated routes.

#### Dashboard and Requester Page

12. **Step 12**: Developed the dashboard page to display an overview of user requests and notifications.
13. **Step 13**: Created the requester page for users to submit new reservation requests.

#### HOD Action

14. **Step 14**: Implemented functionality for HOD users to view and approve/reject requests from their department.
15. **Step 15**: Added API calls to fetch and update requests awaiting HOD approval.

#### Transport Action

16. **Step 16**: Developed functionality for transport users to view approved requests and assign drivers and vehicles.
17. **Step 17**: Implemented API calls to fetch available drivers and vehicles and assign them to requests.

#### Security Action

18. **Step 18**: Implemented functionality for security users to review and approve/reject requests assigned for security approval.
19. **Step 19**: Added API calls to fetch requests awaiting security approval and update their status.

### Total Hours Spent: 19 steps (144 hours)

### Demo Video

[Click here to watch the demo video](https://panopto.jamk.fi/Panopto/Pages/Viewer.aspx?id=5b87861f-357f-41c7-bb45-b14700b1fb44)

## Personal Reflection

### Feelings about the Work

Working on this project was a rewarding experience. I enjoyed learning new technologies and applying them to solve real-world problems. The project presented challenges, especially in implementing authentication and real-time updates, but overcoming these hurdles was fulfilling.

### Greatest Learning Experience

The greatest learning experience for me during this project was understanding the importance of planning and organization. From creating the conceptual and logical models to structuring the application, careful planning laid the foundation for smooth development.

### Self-Evaluation Grade

I would give myself a grade of 8.5/10 for this project. While I'm proud of what I accomplished, there is always room for improvement, especially in testing and refining the user experience.

---

Thank you for reading our comprehensive README.

