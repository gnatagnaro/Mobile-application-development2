import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipesStackNavigation from "./stack";
import ShoppingList from "../screens/ShoppingList";
import SettingsDrawerNavigation from "./drawer";
import {Feather, AntDesign, SimpleLineIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: "#ffd43b" },
            }}
        >
            <Tab.Screen 
                options={{
                    title: 'Рецепты',
                    headerShown: false,
                    tabBarActiveTintColor: "#c2255c",
                    tabBarIcon: ({focused}) => (<AntDesign name="book" size={24} color={focused ? '#c2255c' : 'black'}/>)
                }}
                name="Рецепты"
                component={RecipesStackNavigation} />
            <Tab.Screen
                options={{
                    title: 'Список покупок',
                    headerShown: false,
                    tabBarActiveTintColor: "#c2255c",
                    tabBarIcon: ({focused}) => (<Feather name="list" size={24} color={focused ? '#c2255c' : 'black'}/>),
                }}
                name="ShoppingList"
                component={ShoppingList} />
            <Tab.Screen
                options={{
                    title: 'Настройки',
                    headerShown: false,
                    tabBarActiveTintColor: "#c2255c",
                    tabBarIcon: ({focused}) => (<SimpleLineIcons name="settings" size={24} color={focused ? '#c2255c' : 'black'}/>),
                }}
                name="setAccount"
                component={SettingsDrawerNavigation} />
        </Tab.Navigator>
    );
}

export default TabBar;