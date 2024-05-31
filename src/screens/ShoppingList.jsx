import React, { useState, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  AsyncStorage,
} from "react-native";
import FoodInput from "../components/FoodInput";
import FoodNote from "../components/FoodNote";

const ShoppingList = () => {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    loadFoodList();
  }, []);

  const loadFoodList = async () => {
    try {
      const foodListJSON = await AsyncStorage.getItem("foodList");
      if (foodListJSON) {
        setFoodList(JSON.parse(foodListJSON));
      }
    } catch (error) {
      console.error("Ошибка загрузки списка", error);
    }
  };

  const saveFoodList = async (newFoodList) => {
    try {
      const foodListJSON = JSON.stringify(newFoodList);
      await AsyncStorage.setItem("foodList", foodListJSON);
    } catch (error) {
      console.error("Ошибка сохранения заметок", error);
    }
  };

  const addFoodNote = (text) => {
    const newFoodNote = { id: Date.now(), text };
    const newFoodList = [...foodList, newFoodNote];
    setFoodList(newFoodList);
    saveFoodList(newFoodList);
  };

  const deleteFoodNote = (id) => {
    const newFoodList = foodList.filter((food) => food.id !== id);
    setFoodList(newFoodList);
    saveFoodList(newFoodList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          padding: 10,
        }}
      >
        <FoodInput onAddFood={addFoodNote} />
        <ScrollView>
          {foodList.map((food) => (
            <FoodNote key={food.id} food={food} onDelete={deleteFoodNote} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ShoppingList;
