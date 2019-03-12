// Imports
import React, { PureComponent } from 'react'
import { View } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import Body from '../../common/Body'
import CrateList from '../../crate/List'
import NavigationTop from '../../common/NavigationTop'
import ActionIcon from '../../../ui/icon/ActionIcon'
// Component
class Crates extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <NavigationTop
        title="Charging Stations"
        rightIcon={
          <ActionIcon
            icon={'info-outline'}
            onPress={() => this.props.navigation.navigate(routesHome.info.name)}
          />
        }
      />
        <Body>
          <CrateList />
        </Body>
      </View>
    )
  }
}

export default Crates
