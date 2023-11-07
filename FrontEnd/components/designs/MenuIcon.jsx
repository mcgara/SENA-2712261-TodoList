import { View, StyleSheet } from 'react-native'
import Icon from './Icon'

/**
 * @typedef {import('./Icon').IconProps & {
 *   style?: import('../types').ViewStyleProp,
 * }} MenuIconProps 
 * @type {import('react').FC<MenuIconProps>}
 * @param {MenuIconProps}
 */
export function MenuIcon({ scale, size, style }) {
  if (!Array.isArray(style)) style = [style]
  
  return (
    <Icon scale={scale} size={size}>
      <View style={styles.container}>
        <View style={[styles.line, ...style]}/>
        <View style={[styles.line, ...style]}/>
        <View style={[styles.line, ...style]}/>
      </View>
    </Icon>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: '20%',
  },
  line: {
    width: '50%',
    height: 3.5,
    backgroundColor: '#000',
    borderRadius: 100
  }
})

export default MenuIcon
