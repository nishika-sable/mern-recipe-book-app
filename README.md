# Recipe Book Application - MERN Stack

## Project Overview

Recipe Book is a full-stack MERN application that allows users to:

- Register and log in
- Upload a profile picture
- Search for recipes
- View recipe details
- Save favorite recipes
- View saved recipes on their profile

The frontend is built using React, while the backend uses Node.js, Express.js and MongoDB. Recipe data is retrieved from the Spoonacular API.

---

## Technologies Used

### Frontend

- React
- Axios
- Redux
- Redux Persist
- Formik
- Yup
- FontAwesome
- Nginx

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token
- Multer
- Helmet
- CORS

### DevOps

- Docker
- Docker Compose
- Docker Network
- Docker Volumes
- AWS EC2
- Git
- GitHub

### External API

- Spoonacular API

---

## 3-Tier Architecture

The application consists of three tiers.

### Frontend

- React application
- Served using Nginx
- Publicly exposed through port `80`

### Backend

- Node.js and Express application
- Accessible internally through the Docker network
- Not publicly exposed

### Database

- MongoDB 7
- Accessible internally through the Docker network
- Not publicly exposed

The frontend communicates with the backend, and the backend communicates with MongoDB through the Docker network.

---

## Docker Deployment

The application was containerized using Docker and Docker Compose and deployed on an AWS EC2 Ubuntu server.

The application contains three Docker services:

### Frontend

- React application
- Served using Nginx
- Publicly exposed through port `80`

### Backend

- Node.js and Express application
- Runs internally through the Docker network
- Not publicly exposed

### Database

- MongoDB 7
- Runs internally through the Docker network
- Not publicly exposed

---

## Docker Network

A custom Docker bridge network named `recipe-network` is used for communication between the frontend, backend and database containers.

The containers communicate with each other using Docker Compose service names.

---

## Persistent Storage

MongoDB uses a named Docker volume:

```text
mongo_data
