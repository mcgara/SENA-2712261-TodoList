import { useContext } from 'react'
import { ScreensContext } from '../../contexts/Screens'
import { Pressable, View, Text, StyleSheet } from 'react-native'

/** @type {import('react').FC<{}>} */
export function HomeScreen() {
  const { setScreen, screenStyles } = useContext(ScreensContext)
  const onPressScreen = () => setScreen("HomeMock")

  return (
    <View style={[screenStyles.container, styles.container]}>
      <Pressable onPress={onPressScreen}>
        <View style={[styles.container, styles.button]}>
          <Text style={{ fontSize: 14 }}>Got To HomeMock</Text>
        </View>
      </Pressable>

      <Text style={styles.text}>Home Screen in process...</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
  },
  text: {
    fontSize: 24
  },
  button: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 50,
    left: -50,
    backgroundColor: 'blue'
  }
})

export default HomeScreen
