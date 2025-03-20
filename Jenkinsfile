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
            }
        }
      stage('Tests') {
            steps {
                sh 'npm run cypress:ci'
            }
        }  
      stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
        }
     }
}