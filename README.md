# Kryptonian App

## Table of Contents

- [Project Overview](#project-overview)
- [Features Implemented](#features-implemented)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)

## Project Overview

Kryptonian App is an application crafted by CelestialCoders to manage user authentication, incorporating Two-Factor Authentication (2FA) with One-Time Passwords (OTP), and secure file uploads. The application follows contemporary RESTful API design principles and utilizes various technologies to guarantee security and efficiency.

## Features Implemented

1. **Kryptonian Registration and Authentication**:

   - **User Registration**: Allows new users to register with merely an email address.
     - Sends a confirmation email.
   - **User Login**: Authenticates users with email and password.
     - Checks if the user's email is confirmed before allowing login.
     - Generates an OTP and sends it to the user's email for successful login, also generates a temporary token.
   - **OTP Generation and Validation**: Ensures secure login by generating and validating OTPs.
     - Checks if an existing OTP is still valid before generating a new one.
   - **JWT Token Handling**: Issues JWT tokens for authenticated sessions.
     - Temporary JWT token issued for OTP validation.

2. **File Upload Service**:
   - Users can upload image files using their API key.
   - Uploaded files are stored as Base64 strings in the database.
   - Uploaded files are deleted from the system after being stored.
   - Only image files are allowed.
3. **Image Access**:
   - Images can be accessed without authentication, as required.

## API Endpoints

### Base URL: `https://localhost:3000/`

#### User Authentication

- **Register**

  - Registers a new user and sends a confirmation email.
  - `POST api/auth/register`
  - Request:

    ```json
    {
    	"email": "user@example.com"
    }
    ```

  - Response:
    ```json
    {
    	"message": "User registered."
    }
    ```

- **Login**

  - Logs in a user and sends an OTP to their email.
  - `POST /auth/login`
  - Request:
    ```json
    {
    	"email": "user@example.com",
    	"password": "yourpassword"
    }
    ```
  - Response:
    ```json
    {
    	"message": "Your OTP code is ${otp}"
    }
    ```

- **Verify OTP**

  - Verifies the OTP and logs in the user.
  - `POST api/auth/confirm-email`

  - Request:
    ```json
    {
    	"email": "yours@email.com",
    	"otp": "123456"
    }
    ```
  - Response:
    ```json
    {
    	"message": "OTP verified, login successful"
    }
    ```

#### File Upload

- **Upload File**
  - Uploads an image file and associates it with the user.
  - `POST /api/files/upload`
  - Headers:
    ```authorization
    {
      "x-api-key": "your_api_key"
    }
    ```
  - Request: (using Form-data)
    ```vbnet
    Key: file
    Value: (Select an image file from your system)
    ```
  - Response:
    ```json
    {
    	"message": "File uploaded"
    }
    ```

#### API KEY Management

- **Generate Key**

  - Generates an API key on Request.
  - `POST /api-key/create`

  - Response:
    ```json
    {
    	"apiKey": {
    		"key": "your-api-key",
    		"version": 1,
    		"invalidated": false
    	}
    }
    ```

#### Access Images

- **Get All Images**

  - Retrieves all images.
  - `GET /api/images`
  - Response:
    ```json
    {
    	"data": [
    		{
    			"_id": "image_id_1",
    			"base64": "base64_string_of_image1"
    		},
    		{
    			"_id": "image_id_2",
    			"base64": "base64_string_of_image2"
    		}
    	]
    }
    ```

- **Get Single Image**
  - Retrieves a single image.
  - `GET /api/images/:id`
  - Response:
    ```json
    {
    	"data": {
    		"_id": "image_id",
    		"base64": "base64_string_of_the_image"
    	}
    }
    ```

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **Nodemailer**: Node.js module for sending emails.
- **bcrypt.js**: Library for hashing passwords.
- **jsonwebtoken**: Library for creating and verifying JWTs.
- **multer**: Middleware for handling multipart/form-data.
- **uuid**: Library for generating unique IDs (API keys).

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/izzdwizz/Kryptonite.git
   cd Kryptonite
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**: - Create a `.env` file in the root directory. - Add the following environment variables:
   `env
 PORT=3000
MONGODB_URI=mongodb+srv://uchenduizu:drunksmqw@cluster0.lltrk3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
EMAIL_HOST=gmail  
EMAIL_USER=uchenduizu@gmail.com
EMAIL_PASS=nsoptanpcsnjihao
  `

4. **Run the Application**:
   ```bash
   npm start
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---
