pipeline {
    agent none
    stages {
        stage('Compile Process') {
            agent {
                docker {
                    image "node:latest"
                    args '-p 3000:3000'
                }
            }
            stages {
                stage('install dependencies') {
                    steps {
                        sh 'npm install'
                        // sh 'cp -r /var/jenkins_home/workspace/node_modules /var/jenkins_home/workspace/server'
                    }
                }
                stage('build source') {
                    steps {
                        sh 'npm run build'
                    }
                }
                stage('replace') {
                    steps {
                        sh "rm -r /home/${PIPELINE_FOLDER_NAME}/*"
                        sh "mv /var/jenkins_home/workspace/${PIPELINE_NAME}/* /home/${PIPELINE_FOLDER_NAME}"
                    }
                }
            }
        }
        stage('Deploy Process') {
            agent any
            stages {
                stage('environment') {
                    steps {
                        sh "cp /var/jenkins_home/.env /home/${PIPELINE_FOLDER_NAME}"
                    }
                }
                stage('stop service') {
                    steps {
                        sh "make -C /home/${PIPELINE_FOLDER_NAME} down"
                    }
                }
                stage('start service') {
                    steps {
                        sh "make -C /home/${PIPELINE_FOLDER_NAME} deploy"
                    }
                }
            }
        }
    }
}
