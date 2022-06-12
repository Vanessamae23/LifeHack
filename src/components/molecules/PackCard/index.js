import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Tick, Cross } from '../../../assets'

const PackCard = ({ detail}) => {
  const [type, setType] = useState(false)
  const onPress = () => {
    setType(!type)
  }
  if(type === true) {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.card}>
        <Text style={styles.text}>{detail}</Text>
        <Image style={styles.image} source={Tick} />
      </TouchableOpacity>
    )
  }
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.card}>
      <Text style={styles.text}>{detail}</Text>
        <Image style={styles.image} source={Cross} />
      
    </TouchableOpacity>
  )
}

export default PackCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#0A4A3F",
        minHeight: 50,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 25,
        paddingVertical: 10
    },
    image : {
        width: 20,
        height: 20,
    },
    text: {
      fontSize: 16,
      color: 'black',
      width: 220
    }

})