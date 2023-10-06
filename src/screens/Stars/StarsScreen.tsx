import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import {frase} from '../../utils/index';
import {useState} from 'react';
import Star from '../../components/Star';




interface Props{
  text:string
}
export  default function StarsScreen() {
  const [start,setStart] = useState(false)

  
  return (
    <>
      <View>
        <Image
          source={require("../../../assets/background.png")}
          style={{ flex: 1, position: "absolute" }}
        />
   
   
   <View>
       <Star text={frase}/>
   </View>


   


       
        
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
    flex: 1,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 32,
  },
  areaButton: {
    
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  labelButton: {
    marginTop: 4,
    textAlign: "center",
    fontWeight: "bold",
  },

  text: {
    color:"white",
  },

  modalScreen:{
  
    alignSelf:"center",
    justifyContent:"center",
    
  },

  positionStar1: {
    paddingLeft:60,
    paddingVertical:-10
  }
});
