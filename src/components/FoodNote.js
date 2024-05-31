import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const FoodNote = ({ food, onDelete }) => {
    return (
      <View style={styles.food}>
        <Text style={styles.foodTitle}>{food.text}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(food.id)}>
          <Feather name="delete" size={30} color="#c2255c" />
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
food: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
},
foodTitle: {
    fontSize: 20,
},
});

export default FoodNote;