// Imports
import React from 'react'
import { createStackNavigator } from 'react-navigation'

// App Imports
import { getRoutesForStack } from '../../setup/helpers'
import Home from '../../modules/screens/Home'
import Info from '../../modules/screens/Info'
import Splash from '../../modules/screens/Splash'

// Routes
export const routesHome = {
  //Splash
  splash: {
    name: 'splash',
    path: 'splash',
    screen: Splash,
  },

  // Home
  home: {
    name: 'home',
    path: 'home',
    screen: Home,
  },

  // Info
  info: {
    name: 'info',
    path: 'info',
    screen: Info
  },
}

export default createStackNavigator(getRoutesForStack(routesHome), {
  initialRouteName: routesHome.home.name,
  headerMode: 'none',
  navigationOptions: { headerVisible: false }
})
