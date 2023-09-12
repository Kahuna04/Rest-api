# Rest-api
# Overview
This RESTful API allows you to perform CRUD operations on a "user" resource. You can create, retrieve, update, and delete User records. Additionally, you can query persons by their user_id.

# Table of Contents
- Getting Started
Prerequisites
Installation
Configuration
- Usage
Endpoints
Request Examples
Response Examples
Authentication
Error Handling
Testing
# Getting Started with Your API
This guide will help you get started with using this API. Follow the steps below to set up and configure the API on your local environment.

Prerequisites
Before you begin, ensure that you have the following prerequisites installed on your system:

Node.js: Download and Install Node.js

npm (Node Package Manager): npm typically comes bundled with Node.js. You can verify its installation by running:

npm -v
MongoDB: Download and Install MongoDB

Installation
Follow these steps to install and set up the API:

Clone the Repository:

Clone the API repository from GitHub to your local machine:

git clone https://github.com/adesinak4/HNG.git
Navigate to the Project Directory:

Change your current directory to the project's directory:

cd Backend Stage Two
Install Dependencies:

Install the required Node.js packages using npm:

npm install
Configuration
To configure the API, you may need to set up environment variables and customize certain settings. Create a .env file in the project root and add the following environment variables (customize them as needed):

# Port for the API server (e.g., 3000)
PORT=3000

# MongoDB connection URL (e.g., mongodb://localhost:27017/your-database)
MONGODB_URI=mongodb://localhost:27017/your-database
Starting the API
Now that you have cloned the repository, installed the dependencies, and configured the environment variables, you can start the API by running the following command:

npm start
The API will start, and you should see a message indicating that the server is running on the specified port (e.g., Server is running on port 3000).

With the API up and running, you can begin making requests to the available endpoints and exploring its features.

Usage
This section provides information on how to use this API. It includes details about available endpoints, request examples, and response examples.

Endpoints
The API provides the following endpoints for various operations:

Create a New User

Endpoint: POST /
Description: Create a new user with the provided data.
Request Body: JSON object containing user data (name).
Retrieve a User

Endpoint: GET /user_id
Description: Retrieve a user by user_id. You can pass this query parameter in the URL.
Update a User

Endpoint: PUT /user_id
Description: Update a user by user_id. You can pass this query parameter in the URL.
Request Body: JSON object containing updated user data (name).
Delete a User

Endpoint: DELETE /user_id
Description: Delete a user by user_id. You can pass this query parameter in the URL.
Request Examples
Here are examples of valid API requests for each endpoint:

Create a New User
POST /
Content-Type: application/json

{
  "name": "John Doe"
}
Retrieve a User
You can retrieve a user by user_id. Include this query parameter in the URL:

Retrieve by user_id:

GET /:user_id
Update a User
You can update a user by user_id. Include this query parameter in the URL and provide updated user data in the request body:

Update by user_id:

PUT /:user_id
Content-Type: application/json

{
  "name": "Updated Name"
}
Delete a User
You can delete a user by user_id. Include this query parameter in the URL:

Delete by user_id:

DELETE /:user_id
Response Examples
Here are examples of typical API responses:

Successful Response
{
  "user_id": 1,
  "name": "John Doe"
}
Error Response
{
  "error": "User not found."
}
These examples provide users with a clear understanding of how to make requests to your API and what to expect in the responses.

