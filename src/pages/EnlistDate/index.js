import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker'
import { Header, Gap, Button } from '../../components'

const EnlistDate = ({navigation}) => {
    const [date, setDate] = useState(new Date())
    const [ord, setOrd] = useState(new Date())
  return (
    <View style={styles.page}>
      <Header title="Further Information" onBack={() => navigation.goBack()} subtitle="Last step. Hang On" />
      <View style={styles.container} >
      <Text style={styles.title}>Date of Enlistment</Text>
      <DatePicker date={date} onDateChange={setDate} mode="date" />
      <Gap height={10} />
      <Text style={styles.title}>Date of ORD-ing</Text>
      <DatePicker date={ord} onDateChange={setOrd} mode="date" />
      <Gap height={15} />
      <Button text="Create an Account" onPress={() => navigation.replace('MainApp')} />
      </View>
    </View>
  )
}

export default EnlistDate

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1
    },
  page: {
    flex: 1
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
    fontWeight: '800'
  }
})