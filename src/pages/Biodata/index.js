import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Gap, Input, Button, Header, Select } from '../../components'

const Biodata  = ({navigation}) => {
  return (
    <View style={styles.page}>
    <Header title="Welcome" subtitle="Features of NS Lobangz"/>
    <ScrollView style={styles.container}>
    <Text style={styles.text}>Vocation based Guidance</Text>
    <Text style={styles.subtext}>Under the guidance tab, you will be able to get comprehensive guidance for your NS journey and also vocational-based journey</Text>

    <Text style={styles.text}>Chat With other NS men, your counsellor or your sergeant</Text>
    <Text style={styles.subtext}>Under the home tab, you will be able to find the chat section and start chatting with other NS personnels</Text>

    <Text style={styles.text}>Item Pack Guidance</Text>
    <Text style={styles.subtext}>Under the item list tab, you will get guidance on how to pack your stuffs so you don't have to worry about missing some things</Text>

    <Text style={styles.text}>Scheduling and Annoucement</Text>
    <Text style={styles.subtext}>Under the home News and Announcement and Calendar tab, you will be able to schedule your time more wisely and avoid realising last-minute changes</Text>
    <Gap height={20} />
    <Button onPress={() => navigation.replace('MainApp')} text="Continue" />
  </ScrollView>
</View>
  )
}

export default Biodata

const styles = StyleSheet.create({
    page: {
        flex: 1
      },
    container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1
    },
    text: {
      fontSize: 20,
      color: 'black',
      fontWeight: '600',
      marginTop: 10
    },
    subtext: {
      fontSize: 16,
      marginVertical: 10,
      color: 'black'
    }
})