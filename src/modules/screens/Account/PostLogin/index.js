// Imports
import React, { PureComponent } from 'react'
import { View, Image } from 'react-native'

// Assets
import scorpImage from '../../../../../assets/images/scorpio.jpg'

// UI Imports
import { TabBar, TabContent } from '../../../../ui/tab'
import styles from './styles'

// App Imports
import SubscriptionList from '../../../subscription/List'
import Profile from '../../../user/Profile'
import Body from '../../../common/Body'
import NavigationTop from '../../../common/NavigationTop'
import ActionIcon from '../../../../ui/icon/ActionIcon'

// Component
class PostLogin extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      tabActive: 'subscriptions'
    }
  }

  tabSelect = (tabActive) => {
    this.setState({
      tabActive
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
        }/>
        {/* Hero section */}
        <View style={styles.heroContainer}>
          <Image
            source={scorpImage}
            resizeMode={'cover'}
            style={styles.hero}
          />

          <TabBar
            active={tabActive}
            onSelect={ this.tabSelect }
            items={[
              { title: 'Reservations', key: 'subscriptions' },
              { title: 'Profile', key: 'profile' }
            ]}
          />
        </View>

        <TabContent
          active={tabActive}
          items={{
            subscriptions: <SubscriptionList />,
            profile: <Profile />
          }}
        />
        </Body>
      </View>
    )
  }
}

export default PostLogin
