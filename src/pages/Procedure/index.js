import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { DefaultTheme, List } from 'react-native-paper'
import { ICArrow } from '../../assets'
import { Header } from '../../components'
import { ItemCard } from '../../components'

const Procedure = ({navigation, route}) => {
    const params = route.params
    const detail = params.detail
    const infos = detail.guideName
    const item = params.item
    const data = infos[item].info
  return (
    <View style={styles.page}>
        <Header title={item} subtitle={detail.vocation} onBack onPress={() => navigation.goBack()} />
        <Image source={{uri: detail.imageUri}} style={styles.image} />

        <ScrollView style={styles.view} >

   

      <List.Section >
             {data.map((detail,index,arr) => {
              console.log(infos[item].image[detail])
                 return (
                    <View>
                        <ItemCard  detail={detail} uri={infos[item].image[detail] != null ? infos[item].image[detail] : "https://www.mindef.gov.sg/web/wcm/connect/army/da3c1b43-54d9-40a8-85f8-96a7bbf2b8f4/Supply.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_1QK41482L8HD90QOSSLBSG3000-da3c1b43-54d9-40a8-85f8-96a7bbf2b8f4-nPbh7pg"} additionalInfo={infos[item].tips != null ? infos[item].tips[detail] : []} key={index} />
                    </View>
                    
                 )
             })}
      </List.Section>
      </ScrollView>
    </View>
  )
}

export default Procedure

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
        paddingTop: 0,
      },
      image: {
          height: 200,
          width: '100%',

      },
      view: {
        marginTop: 10
      }
})

