
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --rm -v "$WORKSPACE:/app" -w /app node:22-alpine sh -c "npm ci && npm test"'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t sikha7/nodejs-demo-app:jenkins .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker rm -f nodejs-demo-jenkins || true'
                sh 'docker run -d --name nodejs-demo-jenkins -p 3002:3000 sikha7/nodejs-demo-app:jenkins'
            }
        }
    }
}
