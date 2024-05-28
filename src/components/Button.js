import {Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from "../constants";
const Button = (props) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.btn,
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{
                ...FONTS.body2,
                fontFamily : "medium",
                color : COLORS.white
            }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal : SIZES.padding,
        paddingVertical : SIZES.padding2,
        borderColor : COLORS.primary,
        borderRadius : 32,
        borderWidth : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : COLORS.primary
    }
});

export default Button