import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import {memo} from "react";

const RecipeItem = memo(({
    title,
    description,
    imagePath,
    imageLocalPath,
    onClick,
                    }) => {
    const getImagePath =() => {
        if (imagePath) {
            return {
                uri: imagePath
            }
        }
        return imageLocalPath;
    }

    return (
        <TouchableOpacity style={styles.wrapper} onPress={onClick}>
            <ImageBackground
                style={styles.image}
                source={getImagePath()}
            >
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </ImageBackground>
            <View style={styles.textWrapper}>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
})

export default RecipeItem;

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
            width: 1,
            height: 3,
        },
    },
    image: {
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
            width: 1,
            height: 0,
        },
    },
    textWrapper: {
        display: 'flex',
        padding: 5,
    },
    title: {
        fontSize: 26,
        fontWeight: 500,
        color: 'white',
    },
    description: {
        fontSize: 17,
    }
})