pipeline {
    agent any

  
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/LucasDia5/testecypress'
            }
        }
       
    stage('Install Dependencies') {
          steps {
             script {
                    if (fileExists('package.json')) {
                        sh 'npm init -y'
                        sh 'npm config set cafile "/home/lucas/Downloads.crt"'
                        sh 'npm install cypress --save-dev'
                    } else {
                        error "Arquivo package.json não encontrado!"
                    }
                }
            }
        }
        
      stage('Run Cypress') {
            steps {
                sh 'npx cypress run --spec "cypress/e2e/spec.cy.js"'
            }
        }  

    stage('Gerar Relatorios') {
            steps {
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports/html',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }      
     }
}
