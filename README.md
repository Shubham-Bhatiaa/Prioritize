# Todo App

A simple Todo application built with the MERN stack (MongoDB, Express, React, Node.js) to manage tasks. Users can add, update, delete, and mark tasks as completed.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Responsive design

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other tools**: Mongoose, Axios

## Installation

### Prerequisites

- Node.js
- MongoDB (or MongoDB Atlas for cloud database)

### Steps to run the app locally

1. Clone the repository:
    ```bash
    git clone https://github.com/Shubham-bhatiaa/Prioritize.git
    cd todo-app
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```

4. Set up environment variables in the `.env` file in the `backend` folder:
    ```env
    MONGO_URI=your_mongo_database_url
    PORT=5000
    ```

5. Start the backend server:
    ```bash
    cd backend
    npx nodemon server.js
    ```

6. Start the frontend server:
    ```bash
    cd frontend
    npm run dev
    ```

7. Open your browser and visit `http://localhost:3000` to view the app.

## Contributing

Feel free to fork the repository, submit issues, and create pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.
