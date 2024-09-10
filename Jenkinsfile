pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('3d0b9d04-571a-47ba-ad3a-d8337ab9536d')
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from your repository
                git branch: 'main', url: 'https://github.com/markmark345/share-see-frontend.git'
            }
        }

        stage('Build') {
            steps {
                nodejs('Node') {
                    stage('Check Node.js Version') {
                        steps {
                            // เช็คเวอร์ชั่นของ Node.js
                            sh 'node --version'
                            // เช็คเวอร์ชั่นของ npm
                            sh 'npm --version'
                        }
                    }

                    stage('Install Dependencies') {
                        steps {
                            // Install project dependencies
                            sh 'npm install'
                        }
                    }

                    stage('Build') {
                        steps {
                            // Build the project
                            sh 'npm run build'
                        }
                    }
                }
            }
        }

        stage('Deploy to Vercel') {
            steps {
                // Deploy to Vercel
                sh '''
                npx vercel --prod -t $VERCEL_TOKEN
                '''
            }
        }
    }
}
