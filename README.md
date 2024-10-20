# Chat App

A real-time chat application where users can have multiple conversations, similar to WhatsApp or Google Messages. Messages disappear after 24 hours, and users can register using a unique ID instead of a phone number.

## Features

- Real-time messaging using WebSockets
- User registration and authentication with JWT
- Messages expire after 24 hours
- Simple user interface for chatting

## Tech Stack

- **Backend**: Node.js, Express, MySQL (using XAMPP)
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: JWT (JSON Web Token)
- **Real-time Communication**: WebSocket (using `ws` library)

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [XAMPP](https://www.apachefriends.org/index.html) (for MySQL database)
- Basic knowledge of JavaScript and Express

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/tsakane28/chat-app.git
cd chat-app
```

### 2. Install Dependencies

Run the following command to install the required packages:

```bash
npm install
```

### 3. Set Up the Database

1. Start the XAMPP control panel and start the Apache and MySQL services.
2. Open phpMyAdmin (usually at `http://localhost/phpmyadmin`).
3. Create a new database (e.g., `chat_app`).
4. Create the necessary tables. You can create a `users` table with columns `id`, `username`, and `password`.

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory of the project and add your JWT secret:

```plaintext
JWT_SECRET=your_secret_key
```

### 5. Run the Application

Start the server:

```bash
node src/index.js
```

The server will start running at `http://localhost:8080`.

### 6. Access the Application

You can access the frontend files located in the `public` directory. Open `index.html` in your browser to use the chat application.

## Usage

- **Register a User**: Send a POST request to `/api/auth/register` with a JSON body containing `username` and `password`.
- **Log In**: Send a POST request to `/api/auth/login` with `username` and `password` to receive a JWT token.
- **Send Messages**: Use WebSockets to send and receive messages in real time.
- **Message Expiry**: Implement a background job to delete messages after 24 hours.

## Contributing

Contributions are welcome! Please create an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
```

### Customization Notes
- Make sure to replace `your_secret_key` in the `.env` section with an actual secret key you plan to use for JWT.
- You can modify or expand sections based on your project’s actual features or requirements.

Let me know if you need any further modifications or additional information!