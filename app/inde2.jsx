import React, { useState } from 'react'
//training modal ,alert and status bar,box shadow
//we use custom component we call it greet
import {
    Button,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Pressable,
    Modal,
    ScrollView,
    StatusBar,
    ActivityIndicator,
    Alert,
  } from "react-native";
import Greet from '../myComponents/Greet';
function index() {
  const [isModalVissible,setIsModalVissible]=useState(false)
  return (
    
      <View style={mystyle.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={{backgroundColor:"cyan"}}>
           <Greet name='tefe'/>
           <Greet name='django'/>
            <Button title="Alert" onPress={()=>Alert.alert("this is alert","invalid entry" ,
            {text:"cancel" ,onPress: ()=>console.log("cancel pressed")} ,
            {text:"ok" , onPress: ()=>console.log("cancel pressed")} 
            )}/>
            <Button onPress={()=>setIsModalVissible(true)} title='open modal' color="midnightblue"/>
            <ActivityIndicator size="large" color="midnightblue" animating={true} />
            <Modal presentationStyle="pageSheet" animationType="slide" visible={isModalVissible} onRequestClose={()=>setIsModalVissible(false)}>
                <View style={{backgroundColor:"yellow",flex:"1"}}>
                  <Button onPress={()=>setIsModalVissible(false)} title='close modal' color="midnightblue"/>
                  <Text>hello modal</Text>
                </View>
            </Modal>
            <View style={[mystyle.box,mystyle.boxshadow]} ></View>
                       
           
        </ScrollView>
       
           
            
      </View>
  )
}

export default index
const mystyle=StyleSheet.create({
    container:{
        backgroundColor:"lightgray",
        flex:"1",
        padding:20
    },
    txt:{
        color:"blue",fontSize:20,fontWeight:"bold"
    },
    box:{
      backgroundColor:"green",
      height:200 ,
      width:200,
     
     borderRadius:10,
     
    },
    boxshadow:{
      elevation:10,
      shadowColor:"gray"
    }
})

