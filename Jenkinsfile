
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
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

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the Console Output.'
        }
    }
}

                
