pipeline {
    agent any
    
    tools {nodejs "Node"}

    environment {
      CHROME_BIN = '/bin/google-chrome'
      CYPRESS_CACHE_FOLDER = '/var/lib/jenkins/cache/Cypress'
   
    }
  
    stages {
      stage('Dependencies') {
          steps {
              sh 'npm i'
              sh 'npm install cypress'

            }
        }
      stage('Tests') {
            steps {
                sh 'npx cypress run'
            }
        }  
      stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
        }
     }
}