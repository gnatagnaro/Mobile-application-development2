import {StyleSheet, TextInput, TouchableOpacity, View, Image} from "react-native";
import {forwardRef, useImperativeHandle, useRef} from "react";

const SearchInput = ({
    value,
    onChangeSearchStr,
    onSearch
    }, ref) => {
    const inputRef = useRef()

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current.focus()
    }))


    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Введите название рецепта"
                value={value}
                ref={inputRef}
                onChangeText={(text) => onChangeSearchStr(text)}
            />
            <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
                <Image style={styles.searchIcon} source={require('../assets/search.png')}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
        borderRadius: 10,
        fontSize: 17,
    },
    searchButton: {
        backgroundColor: '#ffd43b',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    searchIcon: {
        display: 'block',
        width: 30,
        height: 30,
    },
});

export default forwardRef(SearchInput);