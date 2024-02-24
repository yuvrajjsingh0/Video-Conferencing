##  Video Conferencing App with NextJS and SocketIO

This project is a video conferencing application built using NextJS for the frontend and SocketIO for real-time communication on the backend.

### Project Structure
```
.
├── backend/
│   ├── package.json
│   └── src/
│       ├── index.ts
│       └── websockets/
│       └── lib/
├── frontend/
│   ├── pages/
│   │   ├── _app.js
│   │   ├── index.js
│   │   └── ... (other frontend pages)
│   ├── components/
│   │   └── ... (frontend components)
│   ├── public/
│   │   └── ... (static assets)
│   └── package.json
├── README.md

```

### Dependencies

This project requires the following dependencies:

-   Node.js and npm
- SocketIO
- NextJS

### Installation

1.  Clone this repository:

```
git clone https://github.com/yuvrajjsingh0/Video-Conferencing.git

```

2.  Navigate to the project directory:

```
cd Video-Conferencing

```

3.  Install dependencies for both backend and frontend:

```
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

```

### Running the application locally

1.  Start the backend server:

```
cd backend
npm run build
npm run dev
```

2.  Start the frontend development server:

```
cd ../frontend
npm run dev
```

This will start the application on `http://localhost:3000` by default. You can access the video conferencing application in your web browser.

## Usage

-   Enter your name and join an existing room to start or create a new room.
-   Share the room link with others to invite them to the conference.
-   Enjoy seamless video conferencing with real-time communication!

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.
