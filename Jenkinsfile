pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
        ANDROID_HOME = "${HOME}/Android/Sdk"
        AVD_NAME = 'Pixel_API_30' // Change to your AVD name
    }

    tools {
        nodejs 'NodeJS_16' // Set up in Jenkins "Global Tool Configuration"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/your-username/your-repo.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Unit & Component Tests') {
            steps {
                sh 'npm test -- --ci --coverage'
            }
        }

        stage('Start Android Emulator') {
            steps {
                sh '''
                    echo "Starting AVD..."
                    $ANDROID_HOME/emulator/emulator -avd $AVD_NAME -no-window -no-audio -no-boot-anim &
                    adb wait-for-device
                    adb shell input keyevent 82 || true
                '''
            }
        }

        stage('Build Android App for Detox') {
            steps {
                sh 'npx detox build --configuration android.emu.release'
            }
        }

        stage('Run E2E Tests (Detox)') {
            steps {
                sh 'npx detox test --configuration android.emu.release --headless'
            }
        }
    }

    post {
        always {
            junit 'coverage/junit.xml' // Optional: Report Jest results if exported
        }
        cleanup {
            sh 'adb emu kill || true'
        }
    }
}
