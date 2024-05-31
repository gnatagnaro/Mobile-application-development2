import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext } from "react";
import { AccountContext } from "../../App";

const setAccount = () => {
  const { account, setAccount } = useContext(AccountContext);

  const logout = () => {
    setAccount(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: 20,
        }}
      >
        <View style={styles.imageWrapper}>
          <Image
            style={styles.accountPhoto}
            source={{
              uri: account.photo,
            }}
          />
        </View>
        <Text style={styles.text}>Имя: {account.firstName}</Text>
        <Text style={styles.text}>Фамилия: {account.lastName}</Text>
        <Text style={styles.text}>Email: {account.email}</Text>
        <TouchableOpacity onPress={logout} style={styles.button}>
          <Text style={styles.buttonText}>Выйти</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageWrapper: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  accountPhoto: {
    width: 250,
    height: 250,
    borderRadius: "100%",
  },
  text: {
    fontSize: 17,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#fa5252",
    width: 100,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
});

export default setAccount;
