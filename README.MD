Project Setup:
Initialize a Node.js project with
bcryptjs
cors
dotenv
express
jsonwebtoken
mongoose
morgan
nodemailer
validator
and necessary NPM packages.

MongoDB:
Event table and User table

User Authentication:
Implemented user registration and login using bcrypt for password hashing and JWT for token-based authentication.
Endpoints:
POST /register and POST /login

Event Management:
Implemented CRUD operations for managing events, accessible only by authorized users.

Participant Management:
Allow users to register for events.
Stored audience data in event model in audience property

Event API Endpoints:
GET /event - to get all the event.
POST /event - to add new event only organizer can add new event.
POST /event/:id - update event details (event_date, published, capacity, organizer can only updated by organizer).
DEL /event/:id - delete event from database (only organizer can remove event).
POST /events/:id/register

Asynchronous Operations:
Employ async/await and Promises for handling operations such as sending email notifications.
