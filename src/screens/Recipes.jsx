import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { recipes } from "../data/recipes";
import SearchInput from "../components/SearchInput";
import RecipeItem from "../components/RecipeItem";

export const categories = Object.values({
  NONE: "Нет",
  PASTA: "Пасты",
  SOUPE: "Супы",
}).slice(1);

const baseRecipeItemsState = {
  recipeItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_RECIPES":
      return {
        ...state,
        recipeItems: action.payload,
      };
    case "SEARCH":
      const filteredByTitleList = action.payload
        ? recipes.filter((item) => item.title.includes(action.payload))
        : recipes;

      return {
        ...state,
        recipeItems: filteredByTitleList,
      };
    default:
      throw new Error();
  }
};

const Recipes = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, baseRecipeItemsState);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();

  const searchInputRef = useRef(null);
  const itemsClickCount = useRef(0);

  const handleItemClick = useCallback((id) => {
    itemsClickCount.current += 1;
    navigation.push("RecipeScreen", { id });
  }, []);

  // всё должно изменяться одновременно, но не уверен, что заметно
  useLayoutEffect(() => {
    dispatch({
      type: "SET_RECIPES",
      payload: recipes,
    });
    searchInputRef.current.focus();
  }, []);

  const handleCategorySelect = (item) => () => {
    if (item === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(item);
    }
  };

  const onSearch = () => {
    dispatch({
      type: "SEARCH",
      payload: searchValue,
    });
  };

  const filteredItems = useMemo(() => {
    if (selectedCategory) {
      return state.recipeItems.filter(
        (item) => item.category === selectedCategory
      );
    } else {
      return state.recipeItems;
    }
  }, [selectedCategory, state.recipeItems]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          padding: 10,
        }}
      >
        <SearchInput
          value={searchValue}
          onChangeSearchStr={setSearchValue}
          onSearch={onSearch}
          ref={searchInputRef}
        />
        <Text style={styles.categoryTitle}>Категории</Text>
        <FlatList
          style={{
            paddingHorizontal: 10,
          }}
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={handleCategorySelect(item)}
              style={[
                styles.categoryButton,
                selectedCategory === item && styles.categoryButtonPressed, // если выбрана категория, то добавляем стиль categoryButtonPressed
              ]}
              key={item}
            >
              <Text
                style={{
                  fontSize: 17,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          contentContainerStyle={{ gap: 10 }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            rowGap: 10,
            paddingHorizontal: 10, // нужен paddiing, чтобы не обрезались тени
          }}
        >
          {filteredItems.map((element) => (
            <RecipeItem
              key={element.id}
              title={element.title}
              description={element.description}
              imageLocalPath={element.imagePath}
              onClick={() => handleItemClick(element.id)}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // делаем контейнер flex-контейнером
    flex: 1,
    // цвет фона
    backgroundColor: "#fff",
  },
  categoryTitle: {
    // размер шрифта
    fontSize: 26,
    // внешний отступ снизу
    marginBottom: 10,
    // внутренние отступы по горизонтали
    paddingHorizontal: 10,
  },
  categoryButton: {
    // цвет границы
    borderColor: "#ccc",
    // ширина границы
    borderWidth: 1,
    // скругление углов границы
    borderRadius: 10,
    // внутренние отступы
    padding: 15,
    // внешний отступ снизу
    marginBottom: 20,
  },
  categoryButtonPressed: {
    // цвет фона
    backgroundColor: "#ffd43b",
  },
});

export default Recipes;
