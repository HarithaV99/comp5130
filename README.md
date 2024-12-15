Name: Haritha Naga Neha Vankayalapati
ID: 02132255
Email: HarithaNagaNeha_Vankayalapati1@gmail.com


Event Hub is a dynamic and user-friendly web application designed to simplify the way students and administrators manage campus events. Built using modern web technologies like React.js, Node.js, and MongoDB, this platform acts as a bridge for seamless interaction between users and event organizers.


Install dependencies for both frontend and backend:

cd client
npm install

cd ../server
npm install

In the project directory, you can run:

Running the Application

To start the application, follow these steps:

Step 1: Start the Frontend

Navigate to the client directory:

cd client

Start the React development server:

npm start

This will start the frontend on http://localhost:3000.

Step 2: Start the Backend

Navigate to the server directory:

cd server

Start the Node.js backend server:

npm start

Ensure MongoDB is running locally or connected to your MongoDB Atlas cluster.

The backend will run on http://localhost:5000.

Step 3: Access the Application

Open a browser and navigate to http://localhost:3000 to interact with the Event Hub application.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Learn more about Mongodb

you can learn in the (https://www.mongodb.com/try/download/compass)

## APIs used for my project :

User Authentication APIs:

POST /api/auth/register

Purpose: Register a new user.
Request Body:
json

{
  "username": "string",
  "email": "string",
  "password": "string"
}
Response:
Success: 201 Created with a success message.
Failure: 400 Bad Request if validation fails or user already exists.

POST /api/auth/login

Purpose: Authenticate a user and return a JWT.
Request Body:
json

{
  "email": "string",
  "password": "string"
}
Response:
Success: JWT token.
Failure: Invalid credentials error.

GET /api/events

Purpose: Fetch all events.
Response:
Success: List of event objects.
Failure: Error message if unable to fetch data.
POST /api/events

Purpose: Create a new event (Admin-only).
Request Body:
json

{
  "name": "string",
  "date": "string (ISO format)",
  "location": "string",
  "description": "string"
}
Response:
Success: 201 Created with event details.
Failure: Validation errors or unauthorized access.
PUT /api/events/:id

Purpose: Update an event (Admin-only).
Request Body: Partial or full update of the event fields.
DELETE /api/events/:id

Purpose: Delete an event (Admin-only).
Event Registration APIs:
POST /api/events/register

Purpose: Register a user for a specific event.
Request Body:
json

{
  "eventName": "string",
  "username": "string",
  "email": "string",
  "phone": "string"
}
Response:
Success: Registration confirmation.
Failure: Duplicate registration or server error.
GET /api/events/:id/registrations

Purpose: Get all registrations for an event (Admin-only).
Admin Panel APIs:
GET /api/admin/users

Purpose: Fetch all registered users (Admin-only).
POST /api/admin/login

Purpose: Authenticate admin user and provide a token.

## User Documentation :

Overview:

Event Hub is a platform that helps users discover and register for campus events. It includes features for users to create accounts, browse events, and register for activities. Admins can manage events and user registrations.
________________________________________
Features
1.	User Features:
	Register and log in.
	Register for events.
	View all events.
2.	Admin Features:
	Create, edit, and delete events.
	View user registrations.
________________________________________
Getting Started
Registration
1.	Navigate to the Register page.
2.	Fill in your details (username, email, and password).
3.	Submit the form to create an account.
Login
1.	Navigate to the Login page.
2.	Enter your registered email and password.
3.	Click Login to access your account.
Browsing Events
1.	Visit the Events page after logging in.
2.	Browse through the list of available events.
3.	Click on an event to view its details.
Registering for Events
1.	Select an event from the list.
2.	Click Register to enroll in the event.
3.	Confirm your registration.
Admin Access
1.	Admins log in using their credentials.
2.	Navigate to the Admin Panel to manage events.