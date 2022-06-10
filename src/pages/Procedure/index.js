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
        <ScrollView >
      <List.Section >
             {data.map((detail,index,arr) => {
                 return (
                    <View>
                        <ItemCard  detail={detail} key={index} />
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
      }
})
