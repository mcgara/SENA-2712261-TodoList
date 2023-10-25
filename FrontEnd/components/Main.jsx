import { View, Text } from 'react-native'
import User from './User'

export function Main() {
  return (
    <View>
      <Text>Hello World App TodoList</Text>
      <User id={1}/>
    </View>
  )
}

export default Main
