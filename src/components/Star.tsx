import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { frase } from "../utils";
import {useState} from 'react';
import FraseModal from "../utils/FraseModal";

interface Props{
  
  text?:string
}
export default function Stars({text}:Props) {
  const [start,setStart] = useState(false)

  
  return (
    <>
      <View >
        <View style={styles.bg}>
        <Image
          source={require("../../../my-app/assets/background.png")}
          style={{ flex: 1, position: "absolute" }}
        />
        </View>
   
        <TouchableOpacity style={styles.actionButton} onPress={()=>setStart((prev)=>!prev) }>
          <View style={styles.areaButton}>
          <Entypo name="star" size={24} color="white" />
          </View>
          
        </TouchableOpacity>
      </View>

      <View style={styles.modalScreen}>
      {start && <FraseModal>{text}</FraseModal>}
        
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
    marginRight: 0,
    height:10,
    zIndex:100,
  },
  areaButton: {
    padding:0,
    height: 50,
    width: 30,
   
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
    position: 'relative',
    paddingTop:30,
    marginTop:10,
    alignSelf:"center",    
    justifyContent:"center",
    flex:1,
    
  },
  bg: {
    
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    
  }
 
});

