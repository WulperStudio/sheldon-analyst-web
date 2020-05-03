pipeline {
    agent none
    stages {
        stage("Compile Process") {
            agent {
                docker {
                    image "node:latest"
                    args "-p 3000:3000 --env-file=/var/jenkins_home/environment/${PIPELINE_NAME}/.env"
                }
            }
            stages {
                stage("environment") {
                    steps {
                        sh "cp -f /var/jenkins_home/environment/${PIPELINE_NAME}/.env /var/jenkins_home/workspace/${PIPELINE_NAME}"
                    }
                }
                stage("install dependencies") {
                    steps {
                        script{
                            if (PIPELINE_ENV == "dev") {
                                sh "npm install"
                            } else {
                                sh "cp -f -r /var/jenkins_home/workspace/node_modules /var/jenkins_home/workspace/${PIPELINE_NAME}"
                            }
                        }
                    }
                }
                stage("build source") {
                    steps {
                        sh "npm run build"
                    }
                }
                stage("replace static files") {
                    steps {
                        sh "rm -r /home/${PIPELINE_FOLDER_NAME}/*"
                        sh "cp -f -r /var/jenkins_home/workspace/${PIPELINE_NAME}/* /home/${PIPELINE_FOLDER_NAME}"
                    }
                }
            }
        }
        stage("Deploy Process") {
            agent any
            stages {
                stage("environment") {
                    steps {
                        sh "cp -f /var/jenkins_home/environment/${PIPELINE_NAME}/.env /home/${PIPELINE_FOLDER_NAME}"
                    }
                }
                stage("stop service") {
                    steps {
                        sh "make -C /home/${PIPELINE_FOLDER_NAME} down"
                    }
                }
                stage("start service") {
                    steps {
                        sh "make -C /home/${PIPELINE_FOLDER_NAME} deploy"
                    }
                }
            }
        }
    }
}
