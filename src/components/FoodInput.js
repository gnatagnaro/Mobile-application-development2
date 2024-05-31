import React, { useState, } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FoodInput = ({ onAddFood }) => {
    const [inputValue, setInputValue] = useState("");

    const handleAddFood = () => {
        if (inputValue.trim()) {
        onAddFood(inputValue.trim());
        setInputValue("");
        }
    };

    return (
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            maxLength={20}
            placeholder="Добавьте продукт"
            value={inputValue}
            onChangeText={setInputValue}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleAddFood}>
            <AntDesign name="plus" size={30} color="black" />
        </TouchableOpacity>
        </View>
    );
};

  const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      marginRight: 10,
      borderRadius: 10,
      fontSize: 17,
    },
    searchButton: {
      backgroundColor: "#ffd43b",
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
  });

export default FoodInput;