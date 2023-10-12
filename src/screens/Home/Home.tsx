import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Button(props) {
  const { onPress, title = "Quero saber!" } = props;
  const { navigate } = useNavigation();

  const onPresss = () => {
    navigate("starsScreen");
  };
  
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/background.png")}
          style={{ flex: 1, position: "absolute", zIndex: -200 }}
        />

        <View style={styles.divball}>
          <View style={styles.divText}>
            <Text style={styles.text}> Minha Estrela</Text>
          </View>

          <View style={styles.sub} >
            <Text style={styles.subText}>
              o que as estrelas tem para te contar hoje?
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={onPresss}>
            <Text style={styles.textButton}>{title}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.subcontainer}>
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
    color: "white",
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
    opacity: 0.7,
  },
  text: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginBottom:10,
            
  },

  subText: {
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "rgb(180, 150, 40)",
    paddingBottom:40,
   
    
  },
  sub:{
    alignItems:'center'
  },

  juText: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.7,
    color: "rgba(150, 190, 220, 0.4)",
    
    
  },
  subcontainer: {
    paddingTop: 120,
    alignItems:"center",
    
  },

  divball: {
    paddingTop: 60,
    borderRadius: 9999,
    backgroundColor: "rgba(10, 100, 100, 0.15)",
    height: 260,
    zIndex: -1,
    
    
  },

  divText: {
    alignItems:"center",
    
  }
});
