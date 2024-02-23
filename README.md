
# Pomodoro Timer App with Task List

This desktop application combines a Pomodoro Timer with a task list, helping users manage their time effectively using the Pomodoro Technique. Built with Electron and React, it offers a user-friendly interface for timing work sessions and managing tasks.

## Features

- **Pomodoro Timer**: Users can start a 25-minute timer to focus on their work, and when time is up, the app notifies them to take a short break. The timer can be restarted at any time.
- **Task List**: Users can add tasks to their to-do list, mark tasks as completed, and edit existing tasks, allowing for efficient task management alongside time management.

## Getting Started

Follow these instructions to get the application running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) - Ensure you have Node.js installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AlexBaratta/Pomodoro-Timer.git
   ```
   
2. **Navigate to the project directory:**
   ```bash
   cd Pomodoro-Timer
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the application:**
   ```bash
   npm start
   ```
   This command will launch the React app with the Pomodoro Timer.
5. **Run with electron**
   ```bash
   npm run electron
   ```
   This command will run the Electron based desktop app.
## Building the App

To build the app for production, run:

```bash
npm run build
```

This compiles the React application and packages it within an Electron executable.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
