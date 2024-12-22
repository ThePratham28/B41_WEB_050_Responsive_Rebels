# B41_WEB_050_Responsive_Rebels

Investment Portfolio Tracker

## Introduction

The Portfolio Tracker is a full-stack MERN application designed to help users manage their investment portfolios. Users can log in, track assets (stocks, cryptocurrencies, etc.), add transactions, and view analysis. The application ensures a single portfolio per user, promoting simplicity and focus.

## Project Type

Fullstack

## Deplolyed App

Frontend: https://deployed-site.whatever
Backend: https://fintrackr-backend-lvrl.onrender.com
Database: https://deployed-site.whatever

## Directory Structure

```
my-portfolio-tracker/
├── backend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   ├── controllers/
│   │   │   └── middleware/
│   │   ├── models/
│   │   ├── config/
|   ├── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
├── frontend/
|
```

## Video Walkthrough of the project

Attach a very short video walkthough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase

Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features

List out the key features of your application.

- User authentication with JWT and Argon2 encryption.
- Single portfolio per user.
- CRUD operations for transactions (add, edit, delete).
- Dashboard to view detailed analysis of portfolio performance.

## design decisions or assumptions

- Single Portfolio: A deliberate choice to focus user management and simplify analytics.
- JWT for Authentication: Secure and stateless sessions.
- MongoDB Atlas: Cloud database for scalability and ease of use.
- Responsive Design: Frontend optimized for desktop and mobile.

## Installation & Getting started

Backend
1. Clone the repository:
```bash
git clone https://github.com/username/my-portfolio-tracker.git
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables in .env:

```plaintext
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Start the server:
```bash
npm start
```

Frontend
1. Navigate to the frontend directory:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables in .env:
```plaintext
REACT_APP_API_URL=http://localhost:3000
```
4. Start the development server:
```bash
npm start
```

## Usage

Example Workflow:
1. Register or log in to your account.
2. Create a portfolio (if one doesn't exist).
3. Add, edit, or delete transactions in your portfolio.
4. View performance analysis on the dashboard.

Include screenshots as necessary.

## Credentials

Test User:
- Email: ```testuser@example.com```
- Password: ```password123```

## APIs Used

External APIs:
- Alpha Vantage api for live stoch and crypto data.

## API Endpoints
| Endpoint                      | Method | Description                    |
|-------------------------------|--------|--------------------------------|
| `/api/auth/register`          | POST   | Register a new user            |
| `/api/auth/login`             | POST   | Log in an existing user        |
| `/api/portfolio`              | POST   | Create a new portfolio         |
| `/api/portfolio/transaction`  | POST   | Add a transaction              |
| `/api/portfolio`              | GET    | Get transactions               |
| `/api/portfolio/transaction/:id` | PUT   | Update a transaction           |
| `/api/portfolio/transaction/:id` | DELETE| Delete a transaction           |

In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.
GET /api/items - retrieve all items
POST /api/items - create a new item

## Technology Stack

List and provide a brief overview of the technologies used in the project.

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT, Argon2
