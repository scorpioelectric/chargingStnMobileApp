// Imports
import { StyleSheet, StatusBar } from 'react-native'

// UI Imports
import { white } from '../../../../ui/common/colors'
import { blockPadding, deviceWidth, deviceHeight } from '../../../../ui/common/responsive'

// Styles
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight,
  },
  heroContainer: {
    flex: 1,
    elevation: 2,
    backgroundColor: white
  },
  hero: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight / 3
  }
})
