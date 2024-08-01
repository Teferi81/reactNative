import React, { useState } from 'react';
//import {  } from 'expo-status-bar';
import Box from './Box';
import Greet from '../myComponents/Greet';
import { View ,Text ,StatusBar,Modal ,Button,StyleSheet,ScrollView, Image, ImageBackground, ActivityIndicator, Alert, SafeAreaView} from 'react-native'
const mylogo=require("./adaptive-icon.png")
export default function index() {
   StatusBar.setBackgroundColor("blue")
  const [btncondition,btnconditioner]=useState(false)
  const [modalstate ,showmodal]=useState(false)
  return (
   
    <SafeAreaView style={styles.container}>
      <View style={styles.boxcontainer}>
      <Box style={{backgroundColor:"brown"}}>box1</Box>
      <Box style={{backgroundColor:"orange"}}>box2</Box>
      <Box style={{backgroundColor:"#555499"}}>box3</Box>
      {/* <Box style={{backgroundColor:"#ccc"}}>box4</Box>
      <Box style={{backgroundColor:"#2f3f4f"}}>box5</Box>

      <Box style={{backgroundColor:"#335"}}>box6</Box> */}
        </View> 
      <Greet name={"tefe"}></Greet>
     <ScrollView> 
      {/* <StatusBar  hidden={false}/> */}
      <ActivityIndicator/>
      <Button  color="midnightblue"   title="alert" onPress={()=>Alert.alert("tefe","3rd year,computer science",[{text:"yEs"},{text:"nO"}])}/>
      <Button  color="tomato" onPress={()=>showmodal(true)}  title="show modAL"/>
      <Modal onRequestClose={()=>showmodal(false)} visible={modalstate}>
        <ScrollView>
          <Image source={mylogo}/>
          <Text style={{fontSize:100}}>tis is modalssssss</Text>
        </ScrollView>
      </Modal>

      <Text>All thing is for a reason</Text> 
      
      
    </ScrollView>
    </SafeAreaView>

  )
}
const styles=StyleSheet.create({
   boxcontainer:{
    flex:1,
    //justifyContent:"space-evenly",
    alignItems:"center",
    padding:10,
    backgroundColor:"green"
   },
  container:{
    flex:1,
    backgroundColor:"yellow",
    padding:20
  },
  txt:{
    fontSize:30,
    color:"blue",
    fontWeight:"bold"
  },
  
})