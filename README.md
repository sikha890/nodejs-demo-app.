# Node.js CI/CD Pipeline with GitHub Actions and Docker

## Project Overview

This project demonstrates an automated CI/CD pipeline for a Node.js application using GitHub Actions, Docker, and Docker Hub.

Whenever code is pushed to the `main` branch, GitHub Actions automatically installs dependencies, runs tests, builds a Docker image, and pushes the image to Docker Hub.

## Technologies Used

* Node.js
* Git and GitHub
* GitHub Actions
* Docker
* Docker Hub

## Application

The sample Node.js web application responds with:

* Hello, DevOps!
* My CI/CD pipeline is working.

## Project Structure

```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── .dockerignore
├── Dockerfile
├── app.js
├── app.test.js
├── package.json
├── package-lock.json
└── README.md
```

## Run the Application Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Run tests

```bash
npm test
```

### 3. Start the application

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Run with Docker

### 1. Build the Docker image

```bash
docker build -t nodejs-demo-app .
```

### 2. Run the container

```bash
docker run -d -p 3000:3000 --name nodejs-demo nodejs-demo-app
```

Open http://localhost:3000 in your browser.

## CI/CD Pipeline

The GitHub Actions workflow is configured in `.github/workflows/main.yml`.

It runs these steps when code is pushed to `main`:

1. Check out the source code.
2. Set up Node.js.
3. Install dependencies.
4. Run application tests.
5. Set up Docker Buildx.
6. Log in to Docker Hub using GitHub repository secrets.
7. Build and push the Docker image to Docker Hub.

## GitHub Secrets

The following repository secrets are required:

* `DOCKERHUB_USERNAME`
* `DOCKERHUB_TOKEN`

These secrets allow GitHub Actions to authenticate with Docker Hub. Do not store access tokens or passwords in the source code.

## Docker Hub Image

Docker Hub repository:

https://hub.docker.com/r/sikha7/nodejs-demo-app

Image:

```bash
docker pull sikha7/nodejs-demo-app:latest
```

Run the downloaded image:

```bash
docker run -d -p 3001:3000 --name demo-from-hub sikha7/nodejs-demo-app:latest
```

Open http://localhost:3001 in your browser.

## Outcome

The project demonstrates automated testing, Docker image building, and publishing through a GitHub Actions CI/CD workflow.

## Repository
Testing automatic Jenkins build

https://github.com/sikha890/nodejs-demo-app
