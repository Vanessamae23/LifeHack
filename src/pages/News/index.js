import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Header, List } from '../../components'
import { Notes, Calendar, Clock } from '../../assets'

const News = ({navigation, route}) => {
    const item = route.params
  return (
    <View>
      <Header title={item.title} subtitle="Event details" onBack onPress={() => navigation.goBack()} />
      <Image style={styles.image} source={{uri: item.uri}} />
      <List name="Notes" desc={item.notes} profile={Notes} />
      <List name="Date" desc={item.date} profile={Calendar} />
      <List name="Time" desc={item.time} profile={Clock} />
    </View>
  )
}

export default News

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%'
    }
})