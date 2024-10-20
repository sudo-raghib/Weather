# Rule Engine Application
**Demo** https://drive.google.com/file/d/1BdQBywO8eIIpaAHm4fMzaD_0rbK4nCUQ/view?usp=sharing


## Table of Contents
- [Overview](#overveiw)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Application](#running-the-application)

## Overview

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Databse:** MongoDB

## Installation

1. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm run install
    ```

2. Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm run install
   ```

## Running the Application


1. Start MongoDB instance on `27017` port.
2. Start the backend server:

   > Note: Add `MONGODB_URI` and `OPEN_WEATHER_API_KEY` in `.env` file, check `.env.example` for reference.

   ```bash
   npm run start
   ```
4. Start the frontend server:

   > Note: Add `VITE_API_BASE_URL` in `.env` file, check `.env.example` for reference.

   ```bash
   npm run start
   ```

Open [http://localhost:5173](http://localhost:5173) to view the application in the browser.
