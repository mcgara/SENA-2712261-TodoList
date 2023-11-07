import { View, StyleSheet } from 'react-native'
import Icon from './Icon'

/**
 * @typedef {import('./Icon').IconProps & {
*   style?: import('../types').ViewStyleProp,
* }} UserIconProps 
* @type {import('react').FC<UserIconProps>}
* @param {UserIconProps}
*/
export function UserIcon({ scale, size, style }) {
  if (!Array.isArray(style)) style = [style]
  
  return (
    <Icon scale={scale} size={size}>
      <View style={[styles.container, ...style]}/>
    </Icon>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    borderRadius: 100
  }
})

export default UserIcon
