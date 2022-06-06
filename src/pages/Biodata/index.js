import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Gap, Input, Button, Header, Select } from '../../components'

const Biodata  = ({navigation}) => {
  return (
    <View style={styles.page}>
    <Header onBack={() => {}} title="Biodata" subtitle="Complete your Information"/>
    <ScrollView style={styles.container}>
    <Input onNumber={true} label="Leave Lobangz" placeholder="Leave Days Left" />
    <Gap height={16}/>
    <Input onNumber={true} label="Off Lobangz" placeholder="Off Days Left" />
    <Gap height={16}/>
    <Input onNumber={true} label="Book Out Lobangz" placeholder="Book Out Days Left" />
    <Gap height={16}/>
    <Input label="Rank" placeholder="Eg. Seargant" />
    <Gap height={24}/>
    <Button onPress={() => navigation.replace('EnlistDate')} text="Continue" />
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
})