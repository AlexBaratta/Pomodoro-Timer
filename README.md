
# Pomodoro Timer App with Task List

This desktop application combines a Pomodoro Timer with a task list, helping users manage their time effectively using the Pomodoro Technique. Built with Electron and React, it offers a user-friendly interface for timing work sessions and managing tasks.

## Features

- **Pomodoro Timer**: Users can start a 25-minute timer to focus on their work, and when time is up, the app notifies them to take a short break. The timer can be restarted at any time.
- **Task List**: Users can add tasks to their to-do list, mark tasks as completed, and edit existing tasks, allowing for efficient task management alongside time management.

## Getting Started

Follow these instructions to get the application running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) - Ensure you have Node.js installed on your machine.

### Installation and Running the Application

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AlexBaratta/Pomodoro-Timer.git
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd Pomodoro-Timer/frontend
   ```

3. **Install frontend dependencies:**
   ```bash
   npm install
   ```

4. **Start the React app:**
   ```bash
   npm start
   ```
   This command will start the React application in development mode.

5. **In a new terminal, navigate to the backend directory:**
   ```bash
   cd ../backend
   ```

6. **Install backend dependencies and start the backend server:**
   ```bash
   npm install
   npm start
   ```
   This starts the backend server required for the application's data management.

7. **To use the app on the desktop, navigate back to the frontend directory and run Electron:**
   ```bash
   cd ../frontend
   npm run electron
   ```
   This command will launch the Electron app with the Pomodoro Timer and task list functionality.

## Building the App

To build the app for production, ensure you are in the frontend directory and run:

```bash
npm run build
```

This compiles the React application and packages it within an Electron executable.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
