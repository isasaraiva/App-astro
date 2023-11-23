import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Button(props) {
  const { width: screenX, height } = Dimensions.get("window");

  const { onPress, title = "Quero saber!" } = props;
  const { navigate } = useNavigation();

  const onPressStar = () => {
    navigate("starsScreen");
  };

  const onPressJu = () => {
    Linking.openURL("https://www.instagram.com/asestrelasmedisseram/");
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("./background.png")}
          style={{
            flex: 1,
            width: screenX,
            position: "absolute",
            zIndex: -200,
          }}
        />

        <View style={styles.container0}>
          
          <View style = {styles.img}>
          <Image
            source={require("../../../assets/adaptive-icon.png")}
            style={{ width: 105, height: 102 }}
          />
          </View>
          <View style={styles.divText}>
            <Text style={styles.text}> Minha Estrela</Text>
          </View>

          <View style={styles.sub}>
            <Text style={styles.subText}>O que as estrelas</Text>
            <Text style={styles.subText}>tem para te contar hoje?</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={onPressStar}>
            <Text style={styles.textButton}>{title}</Text>
          </TouchableOpacity>



         
          <TouchableOpacity style={styles.subcontainer} onPress={onPressJu}>
            <Text style={styles.juText}> Juliana Formiga</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: "center",
    flex: 1,
  },
  container0: {
    alignItems: "center",
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  textButton: {
    fontSize: 26,
    lineHeight: 36,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "rgb(153, 214, 255)",
    zIndex: 10,
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
    backgroundColor: "#0F273C",
    
  },
  text: {
    fontSize: 28,
    lineHeight: 31,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "rgb(182, 237, 255)",
   
  },

  subText: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: "rgb(200, 224, 255)",
    paddingBottom: 5,
    
    
  },
  sub: {
    alignItems: "center",
    paddingTop:140,
  },

  juText: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.7,
    color: "rgba(153, 204, 255, 0.7)",
  },
  subcontainer: {
    paddingTop: 120,
    alignItems: "center",
  },

  divText: {
    alignItems: "center",
    marginTop: 20,
  },
  img: {
    marginTop:80,
  }

});
