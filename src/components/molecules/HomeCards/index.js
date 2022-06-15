import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { BMT } from '../../../assets'

const HomeCards = ({onPress, image, name}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={onPress}>
        <View style={styles.view}>
        <ImageBackground imageStyle={{ opacity: 0.4,backgroundColor: 'black', borderRadius: 10}} style={styles.card} source={{uri: image}} >
          <Text style={styles.text}>{name}</Text>
      </ImageBackground>
        </View>
      
    </TouchableOpacity>
  )
}

export default HomeCards

const styles = StyleSheet.create({
    card: {
        height: 120,
        width: 200,
        
        justifyContent: 'flex-end'
        
    },
    text: {
        fontSize: 20,
        margin: 20,
        fontWeight: '800',
        color: 'white'
    },
    container: {
        marginRight: 10,
    },
})