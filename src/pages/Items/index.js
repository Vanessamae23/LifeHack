import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Item } from '../../assets'
import { ItemCard } from '../../components'
import Firebase from 'firebase'
import { getData } from '../../utils/localStorage'

const Items = () => {
  const [item, setItem] = useState([])
  const [user, setUser] = useState({});
  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  useEffect(() => {
    getDataUserFromLocal();
    Firebase.database().ref('list/').once('value').then(res => {
      if(res.val()) {
        setItem(res.val())
      }
    })
  }, [])
  return (
    <View style={styles.page}>
        <Image style={styles.image} source={Item} />
        <Text style={styles.text}>Item Pack List</Text>
        <ScrollView>
        { item.map((list, index) => {
              return <ItemCard  detail={list.item} key={index} />
            })}
        </ScrollView>
     
    </View>
  )
}

export default Items

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        height: 200,
        width: 'auto',
        borderBottomLeftRadius: 25
    },
    text: {
      alignSelf:'center',
      marginVertical: 15,
      fontSize: 20,
      color: '#0A4A3F',
      fontWeight: '600'
    }
})
