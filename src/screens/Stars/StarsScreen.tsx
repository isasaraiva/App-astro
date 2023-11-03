import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from "react-native";
import { fraseAleatoria } from "../../utils/index";
import { useState } from "react";
import Star from "../../components/Star";
import Star2 from "../../components/Star2";
import Star3 from "../../components/Star3";

interface Props {
  text: string;
}
export default function StarsScreen() {
  const {width:screenX} = Dimensions.get('window')
  const [start, setStart] = useState(false);
  
  return (
    <>
    
      <View style={{backgroundColor: 'black'}}>
        <Image
          source={require("./background.png")}
          style={{ flex: 1, width:screenX, position: "absolute", zIndex: -200 }}
        />
       
          

          <View style={styles.positionStar1}>
            <Star2 text={fraseAleatoria()} />
          </View>

          <View style={styles.positionStar2}>
            <Star text={fraseAleatoria()}></Star>
          </View>

          <View style={styles.positionStar3}>
            <Star2 text={fraseAleatoria()}></Star2>
          </View>
          <View style={styles.positionStar17}>
            <Star2 text={fraseAleatoria()}></Star2>
          </View>

          <View style={styles.positionStar4}>
            <Star text={fraseAleatoria()}></Star>
          </View>

          <View style={styles.positionStar5}>
            <Star3 text={fraseAleatoria()}></Star3>
          </View>

          <View style={styles.positionStar6}>
            <Star text={fraseAleatoria()}></Star>
          </View>

          <View style={styles.positionStar7}>
            <Star text={fraseAleatoria()}></Star>
          </View>

          <View style={styles.positionStar8}>
            <Star3 text={fraseAleatoria()}></Star3>
          </View>
          <Text style={styles.text2}>
            Respire fundo
          </Text>
          <Text style={styles.text3}>
            Escolha uma estrela e abra seu coração para o que ela
            vai ter dizer
          </Text>
          <View style={styles.positionStar9}>
            <Star3 text={fraseAleatoria()}></Star3>
          </View>
          <View style={styles.positionStar10}>
            <Star text={fraseAleatoria()}></Star>
          </View>
          <View style={styles.positionStar11}>
            <Star2 text={fraseAleatoria()}></Star2>
          </View>
          <View style={styles.positionStar12}>
            <Star text={fraseAleatoria()}></Star>
          </View>
          <View style={styles.positionStar13}>
            <Star2 text={fraseAleatoria()}></Star2>
          </View>
          <View style={styles.positionStar14}>
            <Star text={fraseAleatoria()}></Star>
          </View>
          <View style={styles.positionStar15}>
            <Star text={fraseAleatoria()}></Star>
          </View>
          <View style={styles.positionStar16}>
            <Star3 text={fraseAleatoria()}></Star3>
          </View>
          <View style={styles.positionStar18}>
            <Star3 text={fraseAleatoria()}></Star3>
          </View>
          <View style={styles.positionStar19}>
            <Star3 text={fraseAleatoria()}></Star3>
          </View>
          <View style={styles.positionStar20}>
            <Star3 text={fraseAleatoria()}></Star3>
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
    color: "white",
  },

  text2: {
    paddingTop:40,
    paddingBottom:10,
    color: "rgb(10,150,180)",
    width: 250,
    alignSelf: "center",
    fontSize: 30,
    textAlign: "center",
  },
  text3: {
   paddingBottom:20,
    color: "rgb(153, 204, 255)",
    width: 250,
    alignSelf: "center",
    fontSize: 14,
    textAlign: "center",
  },

  modalScreen: {
    alignSelf: "center",
    justifyContent: "center",
  },

  positionStar1: {
    paddingBottom:30,
    paddingLeft: 150,
    height:30,
  },

  positionStar2: {
    paddingHorizontal:80,
    height:30,
    width:30,
    
  },
  positionStar3: {
    width:100,
    height:30,
   
  },
  positionStar4: {
    paddingLeft: 130,
    paddingVertical:0,
    width:200,
    height:30,
  },
  positionStar5: {
    paddingLeft: 330,
    paddingVertical:10,
    width:200,
    height:40,
  },
  positionStar6: {
    paddingLeft: 70,
    paddingBottom:30,
    width:20,
    height:20,
  },
  positionStar7: {
    paddingLeft: 160,
    width:20,
    paddingBottom:30,
    
  },
  positionStar8: {
    paddingLeft: 
    100,
    width:20,
  },

  positionStar9: {
    paddingLeft: 200,
    width:20,
    paddingBottom:30,
  },

  positionStar10: {
    paddingLeft: 280,
    width:20,
    paddingBottom: 30,
  },
  positionStar11: {
    paddingLeft: 50,
    width:20,
    paddingBottom: 20,
  },
  positionStar12: {
    paddingLeft: 160,
    width:20,
    paddingBottom: 20,
  },
  positionStar13: {
    paddingLeft: 190,
    width:20,
    paddingBottom: 30,
  },
  positionStar14: {
    paddingLeft: 340,
    width:20,
    paddingBottom: 30,
  },
  positionStar15: {
    paddingLeft: 120,
    width:20,
    paddingBottom: 30,
  },
  positionStar16: {
    paddingLeft: 240,
    width:20,
    paddingBottom: 30,
  },
  positionStar17: {
    paddingLeft: 220,
    width:20,
    paddingBottom: 30,
  },
  positionStar18: {
    paddingLeft: 220,
    width:20,
    paddingBottom: 30,
  },
  positionStar19: {
    paddingLeft: 360,
    width:20,
    paddingBottom: 30,
  },
  positionStar20: {
    paddingLeft: 70,
    width:20,
    paddingBottom: 30,
  },
 
  
});