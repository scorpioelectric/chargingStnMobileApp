// Imports
import React from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { StatusBar } from 'react-native'

// UI Imports
import { font, scalable } from '../../ui/common/responsive'
import { primary, grey2, white, black } from '../../ui/common/colors'
import Icon from '../../ui/icon/Icon'

// App Imports
import config from '../../setup/config'
import { getRoutesForStack } from '../../setup/helpers'
import Crates from '../../modules/screens/Crates'
import Account from '../../modules/screens/Account'
import { Slider } from 'react-native-gesture-handler';

// API
export const routeApi = config.url.api

export const routeImage = routeApi


export const routes = {

  crates: {
    name: 'Charging Stations',
    path: 'crates',
    screen: Crates,
    navigationOptions: {
      tabBarLabel: 'Charging Stations',
      tabBarIcon: ({ tintColor }) => <Icon
        name={'shopping-basket'}
        size={font(23)}
        color={tintColor}
      />,
    }
  }, 

 /* whatsNew: {
    name: 'whatsNew',
    path: 'whats-new',
    screen: ProductStack,
    navigationOptions: {
      tabBarLabel: 'Whats New',
      tabBarIcon: ({ tintColor }) => <Icon
        name={'whatshot'}
        size={font(23)}
        color={tintColor}
      />,
    }
  }, */

  account: {
    name: 'Account',
    path: 'account',
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => <Icon
        name={'account-circle'}
        size={font(23)}
        color={tintColor}
      />,
    }
  },

 /* home: {
    name: 'home',
    path: 'home',
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon
        name={'home'}
        size={font(23)}
        color={tintColor}
      />,
    }
  }, */
} 

const AppNavigator = createDrawerNavigator(getRoutesForStack(routes), {
  drawerType : Slider,
  initialRouteName: routes.account.name,
  navigationOptions: { tabBarVisible: true, style : { topPadding : StatusBar.currentHeight
  }},
 
})

export default createAppContainer(AppNavigator)
