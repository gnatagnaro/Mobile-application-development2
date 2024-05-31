import { createDrawerNavigator } from "@react-navigation/drawer";
import setAccount from "../screens/Account";
import About from "../screens/About";

const SettingsDrawer = createDrawerNavigator();

const SettingsDrawerNavigation = () => {
  return (
    <SettingsDrawer.Navigator initialRouteName="UserMainInfo">
      <SettingsDrawer.Screen
        options={{
          drawerActiveTintColor: "black",
          drawerActiveBackgroundColor: "#ffec99",
          headerTitle: "",
          title: "Аккаунт",
        }}
        name="UserMainInfo"
        component={setAccount}
      />
      <SettingsDrawer.Screen
        options={{
          drawerActiveTintColor: "black",
          drawerActiveBackgroundColor: "#ffec99",
          headerTitle: "",
          title: "О приложении",
        }}
        name="About"
        component={About}
      />
    </SettingsDrawer.Navigator>
  );
};

export default SettingsDrawerNavigation;
