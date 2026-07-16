pipeline {
    agent any
    triggers {
        cron('H/15 * * * *')
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/abjeet16/dockerCompose.git'
            }
        }
        stage('Remove Old Containers') {
            steps {
                sh 'docker compose down || true'
                sh 'docker rm -f backend frontend || true'
            }
        }
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'mvn clean package'
                }
            }
        }
        stage('Docker Build Backend') {
            steps {
                sh 'docker build -t backend:latest ./backend'
            }
        }
        stage('Docker Build Frontend') {
            steps {
                sh 'docker build -t frontend:latest ./frontend'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}