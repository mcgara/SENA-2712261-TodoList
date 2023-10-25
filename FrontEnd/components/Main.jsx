import { View, Text } from 'react-native'
import User from './User'

export function Main() {
  return (
    <View>
      <Text>Hello World App TodoList</Text>
      <User id={1}/>
      <Text>BE_ENV {process.env['EXPO_PUBLIC_BE_HOST']}</Text>
      <Text>EXPO_PUBLIC_HELLO {process.env['EXPO_PUBLIC_HELLO']}</Text>
      <Text>EXPO_PUBLIC_HELLO2 {process.env['EXPO_PUBLIC_HELLO2']}</Text>
    </View>
  )
}

export default Main
