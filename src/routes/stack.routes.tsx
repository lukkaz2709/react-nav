import { createStackNavigator } from "@react-navigation/stack";

const {Screen, Navigator} = createStackNavigator();

import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";

export  function StackRoutes() {
  return (
    <Navigator>
      <Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        title: 'Home Screen',
        headerTintColor: '#aed14cff',
      }}
      />

      <Screen 
      name="Gallery" 
      component={GalleryScreen} 
      />
    </Navigator>
  );
}