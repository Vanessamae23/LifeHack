import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Firebase from 'firebase'
import { GuideCards } from '../../components'
const Guidelines = ({navigation}) => {
    const [information, setInformation] = useState([])
    useEffect(() => {
        Firebase.database().ref('guides/').once('value').then(res => {
            if(res.val()) {
              const data = res.val();
              const array = [];
              data.map(item => {
                  Object.keys(item).map(key => {
                      const detail = {
                          vocation: item[key].name,
                          guideName: item[key].what,
                          imageUri: item[key].image
                      }
                     array.push(detail)
                  })
              })
              setInformation(array)
            }
          })
    }, [])

  return (
    <View style={styles.page}>
      <Text style={styles.text}>Guidelines</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      {
          information.map((item, index) => {
              return (
                <View>
                <GuideCards key={index} image={item.imageUri} name={item.vocation} onPress={() => navigation.navigate('Vocation', item)} />
                </View>
              )
              
          })
      }
      </ScrollView>
    </View>
  )
}

export default Guidelines

const styles = StyleSheet.create({
    page: {
        paddingTop: 30,
        paddingHorizontal: 16,
        backgroundColor: "white",
        flex: 1
      },
      text: {
          color: 'black',
          fontWeight: '700',
          fontSize: 30,
          paddingBottom: 10
      }
})