import {SafeAreaView, StyleSheet, Text, View} from "react-native";

const About = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                padding: 20,
            }}>
                <Text style={styles.title}>О приложении</Text>
                <Text style={styles.text}>Кулинарное приложение: Рецепты, список покупок, кулинарные идеи</Text>
                <Text style={styles.text}>Выполинл студент группы 211-321 Крапивин Иван Сергеевич в рамках курсового проекта по дисциплине "Основы разработки мобильных приложений"</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 17,
        marginBottom: 10,
    }
});

export default About;