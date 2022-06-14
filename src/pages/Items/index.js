import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Item } from '../../assets'
import { PackCard } from '../../components'
import Firebase from 'firebase'
import { getData } from '../../utils/localStorage'
import { ICArrow } from '../../assets'
import { List, DefaultTheme } from 'react-native-paper'

const Items = () => {
  const [key, setKey] = useState([])
  const [user, setUser] = useState({});
  const [pack, setPack] = useState([])
  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  useEffect(() => {
    getDataUserFromLocal();
    Firebase.database().ref('list/').once('value').then(res => {
      if(res.val()) {
        setKey(res.val())
        const data = [];
        Object.keys(key).map((item) => {
          const information = {
            topic: item,
            things: key[item].items
          }
          data.push(information)
        })
        setPack(data);
      }
    })
  }, [pack])
  return (
    <View style={styles.page}>
        <Image style={styles.image} source={Item} />
        <Text style={styles.text}>Item Pack List</Text>
        <ScrollView>
         <List.Section >
          
          {pack.map((item, index) => {
            const data = item["things"]
              return (
                  
                  <View>
                   <List.Accordion key={index} style={{borderColor:"green", backgroundColor: '#c4dbc2', borderBottomWidth: 2, color: 'white', fontWeight: '600'}} theme={{ colors: { primary: 'black', text: 'black' }}}  title={item["topic"]}
                  right={props => <List.Icon {...props} icon={ICArrow} />}
                  >
                 {data.map((detail, index) => {
                     return (
                            <List.Item key={index} style={{backgroundColor: 'white', marginBottom: -15}} title={props => <PackCard  detail={detail}  />} />
            
                        
                     )
                 })}
                  </List.Accordion>  
                  </View>
                  
                 
              )
          })}
          
          </List.Section>
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