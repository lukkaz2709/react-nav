import { NavigationContainer } from "@react-navigation/native";
import {StackRoutes} from "./stack.routes";
import { BottomTabsRoutes } from "./botom-tabs.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <BottomTabsRoutes />
    </NavigationContainer>
  );
}