import { View, StyleSheet, useWindowDimensions } from 'react-native'

/**
 * @typedef {import('react-native').StyleProp<import('react-native').ViewStyle>} ViewStyleProp
 * @typedef {import('react').FC<ViewStyleProp>} FCViewStyleProp
 */

/**
 * @type {FCViewStyleProp}
 * @param {{ style?: ViewStyleProp }}
 */
export function CircleBg({ style }) {
  const { width, height } = useWindowDimensions()
  if (!Array.isArray(style)) style = [style ?? {}]

  const size = (width + height) / 2 * 0.35
  const styles = getCircleStyle(size)
  
  return <View style={[styles.circle, ...style]}/>
}

/**
 * @type {FCViewStyleProp}
 * @param {{
 *   style: ViewStyleProp,
 *   styleCircle1?: ViewStyleProp,
 *   styleCircle2?: ViewStyleProp
 * }}
 */
export function CirclesBg({ style, styleCircle1, styleCircle2 }) {
  if (!Array.isArray(style)) style = [style ?? {}]
  if (!Array.isArray(styleCircle1)) styleCircle1 = [styleCircle1 ?? {}]
  if (!Array.isArray(styleCircle2)) styleCircle2 = [styleCircle2 ?? {}]

  style.unshift(styles.style)
  styleCircle1.unshift(styles.circle1)
  styleCircle2.unshift(styles.circle2)

  return (
    <View style={style}>
      <CircleBg style={styleCircle1}/>
      <CircleBg style={styleCircle2}/>
    </View>
  )
}

/** @param {number} size */
export const getCircleStyle = size => StyleSheet.create({
  circle: {
    height: size,
    width: size,
    backgroundColor: '#fff',
    opacity: 0.65,
    borderRadius: 100,
    position: 'absolute'
  }
})

export const styles = StyleSheet.create({
  style: {
    position: 'absolute'
  },
  circle1: {
    backgroundColor: 'pink',
    top: -70,
  },
  circle2: {
    left: -85
  }
})

export default CirclesBg
