import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import {fraseAleatoria,frase} from '../../utils/index'
import {useState} from 'react'
import FraseModal from "../../utils/FraseModal";

interface Props{
  text:string
}
export function Stars({text = frase}:Props) {
  const [start,setStart] = useState(false)

  
  return (
    <>
      <View>
        <Image
          source={require("../../../assets/background.png")}
          style={{ flex: 1, position: "absolute" }}
        />
   
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
    marginTop:150,
    alignSelf:"center",
    justifyContent:"center",
    
  }
});
