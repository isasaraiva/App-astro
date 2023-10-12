import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { frase } from "../../utils/index";
import { useState } from "react";
import Star from "../../components/Star";

interface Props {
  text: string;
}
export default function StarsScreen() {
  const [start, setStart] = useState(false);

  return (
    <>
      <View>
        <Image
          source={require("../../../assets/background.png")}
          style={{ flex: 1, position: "absolute" }}
        />

        <Text style={styles.text2}>
          Respire fundo, escolha uma estrela e abra seu coração para o que ela
          vai ter dizer
        </Text>

        <View style={styles.positionStar1}>
          <Star text={frase} />
        </View>
        <View style={styles.positionStar2}>
          <Star text={frase}></Star>
        </View>

        <View style={styles.positionStar3}>
          <Star text={frase}></Star>
        </View>

        <View style={styles.positionStar4}>
          <Star text={frase}></Star>
        </View>

        <View style={styles.positionStar5}>
          <Star text={frase}></Star>
        </View>

        <View style={styles.positionStar6}>
          <Star text={frase}></Star>
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
    padding: 20,
    color: "rgb(10,150,180)",
    width: 250,
    alignSelf: "center",
    fontSize: 24,
    textAlign: "center",
  },

  modalScreen: {
    alignSelf: "center",
    justifyContent: "center",
  },
  positionStar1: {
    paddingBottom:50,
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
    height:100,
  },
  positionStar5: {
    paddingLeft: 330,
    paddingVertical:10,
    width:200,
    height:200,
  },
  positionStar6: {
    paddingLeft: 90,
    paddingVertical:10,
    width:200,
    height:200,
  },
});
