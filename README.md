# Lifestyle Studio E-Commerce Application

## Setup Instructions
1. **Clone the repository**:  
   ```bash
   git clone https://github.com/{owner}/lifestyle-studio.git
   cd lifestyle-studio
   ```

2. **Install dependencies**:  
   - For the server:
   ```bash
   cd server
   npm install
   ```
   - For the client:
   ```bash
   cd client
   npm install
   ```

3. **Environment Variables**:  
   Create a `.env` file in the root of the server directory and add the following variables:
   ```plaintext
   MONGODB_URI=your_mongo_uri
   PORT=your_port
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application**:  
   - Start the server:
   ```bash
   cd server
   npm run dev
   ```
   - Start the client:
   ```bash
   cd client
   npm start
   ```

## Features
- User Authentication (Login/Register)
- Product Browsing and Search
- Shopping Cart Management
- Order Management
- User Profile Management

## Tech Stack
- **Frontend**: React.js, Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## API Endpoints
- **User Authentication**:  
  - `POST /api/users/register`: Register a new user  
  - `POST /api/users/login`: Login an existing user

- **Products**:  
  - `GET /api/products`: Get all products  
  - `GET /api/products/:id`: Get a product by ID  

- **Shopping Cart**:  
  - `GET /api/cart`: Get user cart  
  - `POST /api/cart`: Add to cart  

- **Orders**:  
  - `POST /api/orders`: Create a new order  
  - `GET /api/orders/:id`: Get order by ID

## Troubleshooting Guide
- **Common Issues**:
  - **Application not starting**: Ensure your environment variables are set correctly and the MongoDB server is running.
  - **API Errors**: Check the console for error messages and ensure the API endpoints are correctly set up.

For additional help, refer to the official documentation or open an issue in this repository.
