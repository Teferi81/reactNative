import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";

import React from "react";
const logoimage = require("./adaptive-icon.png");
function index() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container2}>
          
          <View style={styles.button}>
            <Button onPress={()=> console.log("btn presssed")} title="click meme" color="midnightblue" />
          </View>
            <Pressable onPress={() => console.log("txt pressed")}>
              <Text style={styles.txt}>herethe creater</Text>
            </Pressable>
          
          
        </View>
        <View style={styles.box}></View>
          {/* <Image source={logoimage}
        style={{width:30 ,height:30}}/> */}
          <ImageBackground
            style={{ width: 100, height: 100 }}
            source={logoimage}
          >
            <Text>lolololol</Text>
          </ImageBackground>
      </ScrollView>
    </View>
  );
}
export default index;
const styles = StyleSheet.create({
  container: { backgroundColor: "plum", flex: "1" },
  container2: {
    backgroundColor: "lightgreen",
    height: 300,
    justifyContent: "center",
  },
  txt: {
    paddingVertical: 20,
    color: "red",
    textAlign: "center",
    backgroundColor: "lightblue",
    // width: 300,
    fontWeight: "bold",
    fontSize: 35,
  },
  box: { backgroundColor: "white", height: 150, width: 150, borderRadius: 50 },
  button: {
    width: 200,
  },
});
