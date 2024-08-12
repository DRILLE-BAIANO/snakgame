import React from "react";
import {ImageBackground, StyleSheet,Text,TouchbleOpacity,View,view} from "react-native";
import {color} from ".../styles/theme";
import{HEADER_HEIGHT} from "../consts";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Header = ({top,score,paused,pause,reload}) => {
   
   const stylesHeader = {  
   
    height: HEADER_HEIGHT + top,
    backgroundcolor: colors.p4,
    paddingTop: top,
    paddingHorizontal: 20,
  }
  return (
    <View style = {[stylesHeader,styles.header]}>
        <TouchbleOpacity onPress = {reload}>
            
        </TouchbleOpacity>
        <Ionicons name="reload" size ={26} color={color.p6}/>
        <Ionicons
        name= {paused ? "play" : "pause"}
        size={26}
        color={colors.p6}
        />
        <TouchbleOpacity>
            <Text style= {styles.score}>{score}</Text>
        </TouchbleOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        alingnItems:"center",
        justifyContent:"space-between",
    },
    score: {
        color:colors.p6,
        fontSize: 20,
        fontWeight:"bold",
    },
});

export default Header