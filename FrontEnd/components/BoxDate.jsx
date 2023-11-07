import { View, Text, StyleSheet } from 'react-native'
import useBoxDate from '../hooks/useBoxDate'

/** @param {Date} date */
export function boxDateHandleOnDate(date) {
  const day = date.getDate()
  const month = date.toLocaleDateString({}, { month: 'long' })
  const year = date.getFullYear()
  let time = date.toLocaleTimeString({}, { hour: 'numeric', minute: '2-digit' })
  time = time.replace(/\.\s?/g, '').toUpperCase()
  return `${time}\n${day} ${month} ${year}`
}

/**
 * @param {Date} date
 * @return {'Good Morning' | 'Good Afternoon' | 'Good Night'}
 */
export function boxDateHandleMessage(date) {
  const hours = date.getHours()
  const messages = {
    'Good Morning': hours >= 0 && hours <= 11,
    'Good Afternoon': hours >= 12 && hours < 18,
    'Good Night': hours >= 18 && hours <= 23
  }

  let message = 'N/A'
  for (const [key, value] of Object.entries(messages)) {
    if (!value) continue
    message = key
    break
  }
  return message
}

/**
 * @typedef {{
 *   style?: import('./types').ViewStyleProp,
 *   onDate?: (date: Date) => string,
 *   message?: string | (date: Date) => string,
 *   styleDate?: import('./types').TextStyleProp,
 *   styleMessage?: import('./types').TextStyleProp,
 * }} BoxDateProp
 * @type {import('react').FC<BoxDateProp>}
 * @param {BoxDateProp}
 */
export function BoxDate({ onDate, message, style, styleDate, styleMessage }) {
  if (!Array.isArray(style)) style = [style]
  if (!Array.isArray(styleDate)) styleDate = [styleDate]
  if (!Array.isArray(styleMessage)) styleMessage = [styleMessage]
  if (!onDate) onDate = boxDateHandleOnDate
  if (!message) message = boxDateHandleMessage

  const [textDate, textMessage] = useBoxDate({ onDate, message })

  return (
    <View style={[styles.box, ...style]}>
      <Text style={[styles.text, ...styleDate]}>{textDate}</Text>
      <Text style={[styles.text, ...styleMessage]}>{textMessage}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  box: {
    width: '90%',
    height: '15%',
    backgroundColor: '#f4f3df',
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
    borderRadius: 15
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center'
  }
})

export default BoxDate
