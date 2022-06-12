import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { Tick, Cross } from '../../../assets'
import { Alert, Modal, Pressable } from "react-native";
import { Header } from '../../../components'
import { DefaultTheme, List } from 'react-native-paper'

const ItemCard = ({ detail , additionalInfo}) => {
  const [type, setType] = useState(false)
  const onPress = () => {
    setType(!type)
  }
  const [modal, setModal] = useState(false)
  const popUp = () => {
    setModal(!modal);
  }
  const imageSource = type == true ? Tick : Cross
    return (
    <View>
        <Modal animationType = {"slide"} transparent = {false} 
               visible = {modal}>
               {/*https://stackoverflow.com/questions/40703648/set-width-and-height-to-react-native-modal*/}
               {/*<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>*/}
               <View style={{width: "100%", height: "100%", backgroundColor: '#ffffff'}}>
               <Header title={detail} subtitle="More Information" onBack onPress={() => setModal(!modal)} />
               <ScrollView>
                 <Image source={{uri: "https://www.mindef.gov.sg/web/wcm/connect/army/da3c1b43-54d9-40a8-85f8-96a7bbf2b8f4/Supply.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_1QK41482L8HD90QOSSLBSG3000-da3c1b43-54d9-40a8-85f8-96a7bbf2b8f4-nPbh7pg"}} style={styles.imageFull} />
                 <Text style={{fontSize: 20,color: 'black',width: "100%", padding:10}}>{additionalInfo}</Text>
                </ScrollView>
              </View>
              {/*</View>*/}
        </Modal>
      <TouchableOpacity activeOpacity={0.9} onPress={popUp} style={styles.card}>
        <Text style={styles.text}>{detail}</Text>
        <TouchableHighlight onPress={onPress}>
            <Image style={styles.image} source={imageSource} />
        </TouchableHighlight>
      </TouchableOpacity>
    </View>
    )
}

export default ItemCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        borderWidth: 4,
        borderColor: "#0A4A3F",
        minHeight: 100,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 25,
        marginHorizontal: 20,
        paddingVertical: 10
    },
    image : {
        width: 60,
        height: 60,
    },
    text: {
      fontSize: 20,
      color: 'black',
      width: 220
    },
    header: {
        fontSize: 40,
        color: 'black'
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        padding: 25
     },
     imageFull: {
          height: 200,
          width: '100%',
      }
})
