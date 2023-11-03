import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Entypo } from '@expo/vector-icons';
import {useState} from 'react';
import AppContext from "../context";


interface Props{
  text?:string
}
export default function Stars({text}:Props) {
  const [start, setStart] = useState(false)
  const { clicked, setClicked } = useContext(AppContext);
  
  return (
    <>
      <View style={styles.areaStar}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={()=> {
            setStart((prev)=>!prev);
            Alert.alert("", !clicked ? text : "Hoje era isso o que as estrelas tinham pra contar, amanhã tem mais!");
            setClicked(true);
          }
        }>
          <View style={styles.areaButton}>
            <Entypo name="star" size={24} color="#a4e8f9" />
          </View>
          
        </TouchableOpacity>
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
  areaStar: {
    flex:1,
    display:'flex',
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
    marginTop:80,
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

