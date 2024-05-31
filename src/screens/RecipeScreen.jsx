import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {recipes} from "../data/recipes";

const RecipeScreen = ({route}) => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        setRecipe(recipes.find(recipe => recipe.id === route.params.id));
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                padding: 20,
            }}>
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <View style={styles.imageWrapper}>
                    <Image 
                    style={styles.image}
                        source={recipe.imagePath}
                    />
                </View>
                <Text style={styles.sectionTitle}>Ингредиенты</Text>
                <Text style={styles.text}>
                    {recipe.ingredients}
                </Text>
                <Text style={styles.sectionTitle}>Рецепт</Text>
                <Text style={styles.text}>
                    {recipe.recipe}
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    recipeTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 26,
        marginVertical: 10,
    },
    imageWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 10
    },
    text: {
        fontSize: 17,
        paddingBottom: 5,
        borderBottomWidth: 1,
    }
});

export default RecipeScreen;