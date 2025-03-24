pipeline {
    agent any

    options {
        ansiColor('xterm') 
    }

    environment {
      NODE_OPTIONS = "--max_old_space_size=4096"  
      HTTP_PROXY= "http://172.0.0.1"
      NPM_CONFIG_STRICT_SSL = 'false'
      NODE_TLS_REJECT_UNAUTHORIZED = '0'
      CI = 'true'
     //CYPRESS_CACHE_FOLDER = "/var/lib/jenkins/.cache/Cypress"
        CYPRESS_RUN_BINARY = '/usr/local/bin/'
        
    }
  
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/LucasDia5/testecypress'
            }
        }

         stage('limpeza') {
            steps {
                sh 'rm -rf ~/.cache/Cypress'
                sh 'npx cypress cache clear'

            }
        } 
        
    stage('Install Dependencies') {
          steps {
             script {
                    if (fileExists('package.json')) {
                        sh 'npm install'
                        sh 'npx cypress install'                        

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
