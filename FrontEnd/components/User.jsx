import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

/** @param {{ id: number }} */
export function User({ id }) {
  const [dataUser, setDataUser] = useState(null)

  useEffect(() => {
    fetch('http://192.168.1.110:8011/user/' + id)
      .then(response => response.json())
      .then(data => setDataUser(data))
  }, [id])
  
  return (
    <View>
      {
        !dataUser
        ?
          <Text>Loading User Data #{id}...</Text>
        :
        <>
          <Text>User #{id}:</Text>
          <Text>name: {dataUser?.name}</Text>
          <Text>username: {dataUser?.username}</Text>
        </>
      }
    </View>
  )
}

export default User