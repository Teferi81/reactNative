import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Box({style,children}) {
  return (
    <View style={style}>
       <Text style={styles.text}>{children}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    box:{
       backgroundColor:"green",
       padding:60
    },
     text:{
        textAlign:"center",
        fontSize:24,
        color:"white"
     }
})