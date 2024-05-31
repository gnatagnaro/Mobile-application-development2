import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useContext, useState, useDebugValue } from "react";
import { AccountContext } from "../../App";
import { accounts } from "../data/accounts";
import { Feather } from "@expo/vector-icons";

export const useInputData = (newValues) => {
  const [inputData, setInputData] = useState(newValues);

  const handleChange = (name) => (value) => {
    setInputData((oldValues) => ({
      ...oldValues,
      [name]: value,
    }));
  };

  useDebugValue(inputData); // В DevTools будет отображаться текущее значение inputData, используется для отладки кастомных хуков. (в assets лежит пример)

  return {
    inputData,
    handleChange,
  };
};

const Login = () => {
  const [status, setStatus] = useState("empty");
  const { inputData, handleChange } = useInputData({
    email: "",
    password: "",
  });
  const { setAccount } = useContext(AccountContext);
  const handleSubmit = async () => {
    setStatus("checking");
    setTimeout(async () => {
      const accountInList = accounts.find(
        (account) => account.email === inputData.email
      );
      if (accountInList && accountInList.password === inputData.password) {
        setStatus("empty");
        setAccount(accountInList);
      } else {
        setStatus("error");
      }
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Логин"
          onChangeText={handleChange("email")}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          onChangeText={handleChange("password")}
          secureTextEntry={true}
        ></TextInput>
        {status === "error" && (
          <Text style={styles.errorText}>Неверные логин или пароль</Text>
        )}
        <TouchableOpacity
          style={[styles.button, status === "error" && styles.errorButton]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>
            {status === "checking" ? (
              <Feather name="loader" size={24} color="black" />
            ) : (
              "Войти"
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
  },
  button: {
    backgroundColor: "#ffd43b",
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
  },
  errorButton: {
    backgroundColor: "#fa5252",
  },
  errorText: {
    color: "#fa5252",
  },
});

export default Login;
