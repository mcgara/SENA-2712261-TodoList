import { useContext } from 'react'
import { ScreensContext } from '../../contexts/Screens'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import { CirclesBg } from '../designs/Circles.bg'

/** @type {import('react').FC<{}>} */
export function HomeScreen() {
  const { setScreen, screenStyles } = useContext(ScreensContext)
  const onPressScreen = () => setScreen("HomeMock")

  return (
    <View style={styles.bg}>
      <CirclesBg/>
      <View style={[screenStyles.container, styles.container]}>
        <Pressable onPress={onPressScreen}>
          <View style={[styles.bg, styles.button]}>
            <Text style={{ fontSize: 14 }}>Got To HomeMock</Text>
          </View>
        </Pressable>

        <Text style={styles.text}>Home Screen in process...</Text>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#f1cb6a'
  },
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 24
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    position: 'absolute',
    top: 50,
    left: -50,
  }
})

export default HomeScreen
