// Imports
import { AppRegistry } from 'react-native'
// App Imports
import App from './src/setup'
import { name as appName } from './app.json'

// React Native
//AppRegistry.registerComponent(appName, () => App)


//Expo
AppRegistry.registerComponent('main', () => App)
