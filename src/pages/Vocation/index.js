import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { DefaultTheme, List } from 'react-native-paper'
import { ICArrow } from '../../assets'
import { Header } from '../../components'


const Vocation = ({navigation, route}) => {
    const detail = route.params
    const infos = detail.guideName
  return (
    <View style={styles.page}>
        <Header title={detail.vocation} subtitle="Learn more about your vocation" onBack onPress={() => navigation.goBack()} />
        <Image source={{uri: detail.imageUri}} style={styles.image} />
        <ScrollView >
      <List.Section >
          
      {Object.keys(infos).map(item => {
          const data = infos[item].info
          const [expanded, setExpanded] = React.useState(false);

  //const handlePress = () => setExpanded(!expanded);
  const handlePress = () => navigation.navigate('Procedure', {detail, item});
          return (
              
              <View>

              <List.Accordion style={{borderColor:"#c4dbc2", borderBottomWidth: 2,backgroundColor: 'white', color: 'white', fontWeight: '600'}} theme={{ colors: { primary: 'black', text: 'black' }}}  title={item}
              right={props => <List.Icon {...props} icon={ICArrow} />}
        expanded={expanded}
        onPress={handlePress}
              >
             {data.map(detail => {
                 return (
                        <List.Item style={{backgroundColor: '#c4dbc2', paddingLeft: 10}} title={detail} />
        
                    
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

export default Vocation

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