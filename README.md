# Vehicle Reservation System (VRS) Application

Welcome to the Vehicle Reservation System (VRS) application! This project aims to streamline the process of vehicle reservation within a company. Below, you'll find detailed information on how the application works, its structure, and the technologies used.

## Application Scope and Flow Chart

In our application, we have a system for requesting vehicles (like cars or vans) for different purposes (like meetings, sickness, appointments) in a company. Here's how the process flows:

1. **Departments and Requesters**: Each department in the company, such as HR or Sales, has its own group of people who need to request vehicles. These groups are called 'requesters.'

2. **Head of Department (HOD)**: Each department has a designated HOD who approves or rejects vehicle requests from their department.

3. **Request Submission**: When a requester needs a vehicle, they make a request.

4. **Approval Process**: The request is forwarded to the respective HOD for approval.

5. **HOD Approval**: The HOD has the authority to approve or reject the request.

6. **Transport Arrangement**: If approved, the request moves to the transport team, which arranges a vehicle and a driver.

7. **Security Review**: After transport arrangement, the request goes to the security team for a safety review.

8. **Final Approval**: If the security team approves, the requester receives a notification confirming their vehicle reservation.

## Frontend Documentation

### Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: Declarative routing for React.
- **Styled Components**: A CSS-in-JS library for styling React components.
- **Axios**: Promise-based HTTP client for making requests to the backend.
- **Day.js**: A minimalist JavaScript library for parsing, validating, manipulating, and displaying dates and times.
- **Recharts**: A composable charting library built on React components.
- **React Toastify**: React component for toast notifications.
- **Web Vitals**: Library for tracking and analyzing performance metrics on your website.

### Installation

```bash
npm install
```

### Available Scripts

- **start**: Starts the development server.
- **build**: Builds the app for production.
- **test**: Runs tests.
- **eject**: Ejects the app from Create React App.

## Backend Documentation

### Technologies Used

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JSON Web Token (jsonwebtoken)**: Implementation of JSON Web Tokens.
- **Bcrypt**: Library for hashing passwords.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **Dotenv**: Module for loading environment variables from a .env file into process.env.
- **Cookie Parser**: Middleware for parsing cookies in Express.
- **Morgan**: HTTP request logger middleware for Node.js.

### Installation

```bash
npm install
```

### Available Scripts

- **start**: Starts the server using nodemon for automatic restarts during development.
- **test**: Placeholder for testing scripts.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [ISC License](LICENSE).
