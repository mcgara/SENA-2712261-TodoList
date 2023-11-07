import { useContext } from 'react'
import { ScreensContext } from '../../contexts/Screens'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import { BgCircles } from '../designs/BgCircles'
import SearchBar from '../SearchBar'
import MenuIcon from '../designs/MenuIcon'
import UserIcon from '../designs/UserIcon'
import BoxDate, { boxDateHandleMessage } from '../BoxDate'

/** @param {Date} date */
export function boxDateMessage(date) {
  const message = boxDateHandleMessage(date)
  const messages = {
    'Good Morning': 'Buenos Días',
    'Good Afternoon': 'Buenas Tardes',
    'Good Night': 'Buenas Noches'
  }
  return messages[message]
}

/** @type {import('react').FC<{}>} */
export function HomeScreen() {
  const { setScreen, screenStyles } = useContext(ScreensContext)
  const onPressScreen = () => setScreen("HomeMock")

  return (
    <View style={styles.bg}>
      <BgCircles/>
      <View style={[screenStyles.container, styles.container]}>
        
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <MenuIcon/>
            <SearchBar placeholder='Buscar Tareas' styleBar={{ width: '70%' }}/>
          </View>
          <UserIcon/>
        </View>

        <BoxDate style={styles.boxDate} message={boxDateMessage}/>

        <Pressable onPress={onPressScreen}>
          <View style={[styles.bg, styles.button]}>
            <Text style={{ fontSize: 14 }}>Go To HomeMock</Text>
          </View>
        </Pressable>

      </View>
      <BgCircles style={styles.bgCirclesDown}/>
    </View>
  )
}

export const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#f1cb6a',
  },
  container: {
    alignItems: 'center',
    padding: '2%',
  },
  text: {
    fontSize: 24
  },
  button: {
    position: 'absolute',
    top: 400,
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    left: -50
  },
  bgCirclesDown: {
    zIndex: -1,
    left: '75%',
    top: '85%'
  },
  header: {
    marginTop: 5,
    width: '100%',
    height: 50,
    backgroundColor: '#f4f3df',
    borderRadius: 90,
    borderWidth: 2,
    borderColor: '#e4e3cf',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxDate: {
    marginTop: 15
  }
})

export default HomeScreen
