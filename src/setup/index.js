// Imports
import React from 'react'
import { AsyncStorage, Alert} from 'react-native'
import { Provider } from 'react-redux'

// App Imports
import { store } from './store'
import Routes from './routes'
import { setUser, setUserLocally } from '../modules/user/api/actions'

// User Authentication
(async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    if (token && token !== 'undefined' && token !== '') {
      const user = JSON.parse(await AsyncStorage.getItem('user'))
      if (user) {
        store.dispatch(setUser(token, user))

        setUserLocally(token, user)

        console.log('User logged in.')
      }
    }
  } catch (e) {
    console.log('Failed to login user.')
  }
})()

// App
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <Routes />
      </Provider>
    )
  }
}

export class Main extends React.Component {

  constructor(props)
  {
    super(props);
     this.state = { currentScreen : 'Splash'};
     console.log('test');
     setTimeout(()=> {
       Alert.alert('Hello');
        this.setState({currentScreen :'App'})
     }, 3000)
  }
  render(){
     const { currentScreen } = this.state
     let mainScreen = currentScreen === 'Splash' ? <Splash/> : <App/>
     return mainScreen
  }
 }