# Pomodoro Timer

## Overview

The Pomodoro Timer is a simple, easy-to-use time management tool that can help increase productivity by breaking work into intervals, traditionally 25 minutes in length, separated by short breaks. This Electron-based application offers a minimalist interface to help you focus on tasks without distractions.

## Features

##### Currently Implemented
- **Simple Interface**: A clean and distraction-free timer to keep you focused on your tasks.

##### To Be Implemented
- **Customizable Timer**: Set the work and break intervals to suit your personal productivity flow.
- **Notifications**: Receive alerts when a work session ends or a break starts.

## Getting Started

### Prerequisites

Before running the Pomodoro Timer, make sure you have [Node.js](https://nodejs.org/) installed on your system which includes `npm`, used to install Electron.

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/AlexBaratta/Pomodoro-Timer.git
cd pomodoro-timer
```

Install the necessary packages using npm:

```bash
npm install
```

## Running the Application

To start the Pomodoro Timer, run the following command in the root of the project directory:

```bash
npm start
```

## Usage

When the application is running, you will see a timer set to 25 minutes by default, which is the standard duration for one Pomodoro session.

- Click the **Start Clock** button to begin the timer.
- Once the timer reaches zero, a message will display indicating that the session is complete.
- Take a short break, then start another session to continue working.

## Customization

The current version of the Pomodoro Timer does not support customization through the interface. However, you can modify the default time directly in the code if necessary.

Future versions aim to include customizable work and break durations through an options menu.

## Contributing

Your contributions are welcome! If you have suggestions or want to improve the Pomodoro Timer, feel free to fork the repository and submit a pull request with your changes.

## License

This project is open-source software licensed under the MIT License. 