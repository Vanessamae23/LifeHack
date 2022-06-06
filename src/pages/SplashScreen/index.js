import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect} from 'react'
import { Logo } from '../../assets/Illustrations'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000)
      
      }, [])

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image}/>
      <Text style={styles.title}>NS Lobangz</Text>
      <Text style={styles.subtitle} >Onesky Corporation</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300
    },
    title: { 
        fontSize: 32,
        fontWeight: '800',
        color: 'white'
    },
    subtitle: {
        fontSize: 20,
        color: '#eeeeee'
    },
    container: {
        backgroundColor: '#138014',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})