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
                    // เช็คเวอร์ชั่นของ Node.js
                    sh 'node --version'
                    // เช็คเวอร์ชั่นของ npm
                    sh 'npm --version'

                    // Install project dependencies
                    sh 'npm install'

                    // Build the project
                    sh 'npm run build'

                    // Deploy to Vercel
                    sh '''
                    npx vercel --prod -t $VERCEL_TOKEN
                    '''
                }
            }
        }
    }
}
