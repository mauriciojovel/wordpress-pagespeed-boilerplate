pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.node'
      args '-v $WORKSPACE/src/styles:/app -v $WORKSPACE/src/styles/dist:/assets'
    }
  }
  stages {
    stage('Build sources') {
      steps {
        dir('/app') {
          sh 'ls -lh'
          sh 'yarn install'
          sh 'ls -lh'
        }
      }
    }
  }
}
