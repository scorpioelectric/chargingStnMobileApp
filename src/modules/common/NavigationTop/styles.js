// Imports
import { StyleSheet } from 'react-native'

// UI Imports
import { navigationTopHeight, blockPadding, font } from '../../../ui/common/responsive'
import { primary, white, black } from '../../../ui/common/colors'

export default StyleSheet.create({
  container: {
    elevation: 3,
    backgroundColor: white,
    height: navigationTopHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: blockPadding,
    justifyContent: 'space-between'
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    color: black,
    fontSize: font(16)
  },
  menu : {
    color: black,
    alignItems : 'center',
    margin : 10,
    fontSize : font(23)

  }
})
