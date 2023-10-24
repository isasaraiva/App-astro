import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Frase1 from "../screens/Frase1/Index";
import Button from "../screens/Home/Home";

import StarsScreen from "../screens/Stars/StarsScreen";

export default function Route() {
  const { Screen, Navigator } = createNativeStackNavigator();
  return (
    <>
      <Navigator initialRouteName="home">
        <Screen name="home" component={Button} />
        <Screen name="starsScreen" component={StarsScreen} />
        <Screen name="frase1" component={Frase1} />
        
      </Navigator>
    </>
  );
}
