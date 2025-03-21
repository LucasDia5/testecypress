pipeline {
    agent any

    options {
        ansiColor('xterm') 
    }

    environment {
      NODE_OPTIONS = "--max_old_space_size=4096"  
      CYPRESS_CACHE_FOLDER = "/var/lib/jenkins/cypress_cache"
    }
  
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
                        sh 'npm install'
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
