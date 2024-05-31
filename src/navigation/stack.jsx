import Recipes from "../screens/Recipes";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RecipeScreen from "../screens/RecipeScreen";

const RecipesStack = createNativeStackNavigator();

const RecipesStackNavigation = () => {
    return (
        <RecipesStack.Navigator initialRouteName="Recipes">
            <RecipesStack.Screen
                options={{ headerShown: false }}
                name="Recipes"
                component={Recipes}
            />
            <RecipesStack.Screen
                options={{ headerTintColor: "black", headerTitle: "" }}
                name="RecipeScreen"
                component={RecipeScreen}
            />
        </RecipesStack.Navigator>
    );
}

export default RecipesStackNavigation;