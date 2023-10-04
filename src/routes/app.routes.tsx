import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Frase1 from "../screens/Frase1/Index";
import Frase2 from "../screens/Frase2/Index";
import Button from "../components/Home/Home";
import { Stars } from "../screens/Stars/Stars";

export default function Route() {
  const { Screen, Navigator } = createNativeStackNavigator();
  return (
    <>
      <Navigator initialRouteName="home">
        <Screen name="home" component={Button} />
        <Screen name="stars" component={Stars} />
        <Screen name="frase1" component={Frase1} />
        <Screen name="frase2" component={Frase2} />
      </Navigator>
    </>
  );
}
