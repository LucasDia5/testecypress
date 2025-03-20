pipeline {
    agent any
    
    tools {nodejs "Node"}

    environment {
      CHROME_BIN = '/bin/google-chrome'
   
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