// Imports
import React, { PureComponent } from 'react'
import { View, Image } from 'react-native'
import Body from '../../../common/Body'
import NavigationTop from '../../../common/NavigationTop'
import ActionIcon from '../../../../ui/icon/ActionIcon'
// Assets
import scorpImage from '../../../../../assets/images/scorpio.jpg'
import StatusBar from 'react-native'
// UI Imports
import { TabBar, TabContent } from '../../../../ui/tab'
import styles from './styles'

// App Imports
import Login from '../../../user/Login'
import Signup from '../../../user/Signup'

// Component
class PreLogin extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      tabActive: 'login'
    }
  }

  tabSelect = (tabActive) => {
    this.setState({
      tabActive
    })
  }

  onSuccessRegister = () => {
    this.setState({
      tabActive: 'login'
    })
  }

  render() {
    const { tabActive } = this.state

    return (
      
      <View style={styles.container}>
      <Body>
      <NavigationTop
        title="Login"
        rightIcon={
          <ActionIcon
            icon={'info-outline'}
            onPress={() => this.props.navigation.navigate(routesHome.info.name)}
          />
        }
      />
        {/* Hero section */}
        <View style={styles.heroContainer}>
          <Image
            source={scorpImage}
            resizeMode={'cover'}
            style={styles.hero}
           
          />

          <TabBar
            active={tabActive}
            onSelect={this.tabSelect}
            items={[
              { title: 'Login', key: 'login' },
              { title: 'Signup', key: 'signup' }
            ]}
          />
        </View>

        <TabContent
          active={tabActive}
          items={{
            login: <Login />,
            signup: <Signup onSuccessRegister={this.onSuccessRegister} />
          }}
        />
          </Body>
      </View >
    
    )
  }
}

export default PreLogin
