import { NavigationContainer } from "@react-navigation/native";
import {StackRoutes} from "./stack.routes";
import { BottomTabsRoutes } from "./botom-tabs.routes";
import { DrawerRoutes } from "./drawer.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}