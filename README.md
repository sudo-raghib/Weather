# Weather App

### Current Weather
<img width="1728" alt="Screenshot 2024-10-21 at 12 17 02 AM" src="https://github.com/user-attachments/assets/9216d18c-7e3c-4660-8ec5-ca90ada850db">

### Weather Summary
![screencapture-localhost-5173-summary-2024-10-21-00_17_47](https://github.com/user-attachments/assets/b4a9d6c0-3b62-4a79-befb-1626d8b508b7)

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
