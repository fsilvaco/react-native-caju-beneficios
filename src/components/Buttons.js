import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


export const Button = (props) => {

    const { text, ...rest } = props

    return (
        <TouchableOpacity
            style={s.btn}
            {...rest}
        >
            <Text style={s.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export const ButtonGoBack = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={s.goBack} onPress={() => navigation.goBack()}>
            <Text>Voltar</Text>
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    btn: {
        backgroundColor: "#6560f8",
        alignItems: "center",
        paddingVertical: 18,
        borderRadius: 25
    },

    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },

    goBack: {
        marginBottom: 20
    }

});
