import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Guidelines = () => {
  return (
    <View style={styles.page}>
      <Text>Guidelines</Text>
    </View>
  )
}

export default Guidelines

const styles = StyleSheet.create({
    page: {
        paddingTop: 30,
        paddingHorizontal: 16,
        backgroundColor: "white",
        flex: 1
      },
})