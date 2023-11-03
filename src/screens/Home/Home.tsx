import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function Button(props) {
  const { width:screenX, height } = Dimensions.get('window')

  const { onPress, title = "Quero saber!" } = props;
  const { navigate } = useNavigation();

  const onPressStar = () => {
    navigate("starsScreen");
  };

  const onPressJu = () => {
    Linking.openURL('https://www.instagram.com/asestrelasmedisseram/');
  };


  
  
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("./background.png")}
          style={{ flex: 1, width:screenX, position: "absolute", zIndex: -200 }}
        />

        <View style={styles.container0}>
        <Image
        source={require('../../../assets/adaptive-icon.png')}
        style={{ width:102, height:102}}
        />
          <View style={styles.divText}>
            <Text style={styles.text}> Minha Estrela</Text>
          </View>

          <View style={styles.sub} >
            <Text style={styles.subText}>
              o que as estrelas tem para te contar hoje?
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={onPressStar}>
            <Text style={styles.textButton}>{title}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.subcontainer} onPress={onPressJu} >
            <Text style={styles.juText}> Juliana Formiga</Text>
          </TouchableOpacity>
        </View>
      </View>
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    alignItems:"center",
    flex: 1,
  },
  container0: {
    alignItems:"center",
    flex: 1,
  },
 
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "rgb(153, 204, 255)",
    zIndex:10,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginRight: 50,
    marginLeft: 50,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#2C5367",
    opacity: 1,
  },
  text: {
    fontSize: 28,
    lineHeight: 31,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color:"#a4e8f9",
    marginBottom:10,
            
  },

  subText: {
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "rgb(153, 204, 255)",
    paddingBottom:40,
   
    
  },
  sub:{
    alignItems:'center'
  },

  juText: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.7,
    color: "rgba(153, 204, 255, 0.7)",
    
    
  },
  subcontainer: {
    paddingTop: 120,
    alignItems:"center",
    
  },

 

  divText: {
    alignItems:"center",
    
  }
});
