import { View, StyleSheet, useWindowDimensions } from 'react-native'

/**
 * @typedef {import('react').PropsWithChildren & {
 *   scale?: number,
 *   size?: number
 * }} IconProps
 * @type {import('react').FC<IconProps>}
 * @param {IconProps}
 */
export function Icon({ children, scale=0.1, size=45 }) {
  const { width, height } = useWindowDimensions()
  const sizeStyle = size ?? (width + height) / 2 * scale
  const styles = getStyles(sizeStyle)
  
  return <View style={[styles.container]}>{children}</View>
}

/** @param {number} [size] */
export const getStyles = size => StyleSheet.create({
  container: {
    width: size ?? 45,
    height: size ?? 45
  }
})

export default Icon
