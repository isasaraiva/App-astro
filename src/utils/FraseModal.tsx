import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

interface FraseModalProps{
  
  children:React.ReactNode
}
const FraseModal = ({children}:FraseModalProps) => {
  return (
    <View style={styles.modal}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default FraseModal;


const styles = StyleSheet.create({

  text: {
    color: "white",
    textAlign:"center",
    paddingHorizontal:10
  },

  modal:{
    
    justifyContent:"center",
    alignItems: "center",
    alignContent:"center",
    height:150,
    width:300,
    borderRadius:20,
    backgroundColor: "rgba(0, 100, 100, 0.4)",
    
  }
})