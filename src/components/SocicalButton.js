import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants';

const SocicalButton = ({ title, icon, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <Image
                source={icon}
                resizeMode='contain'
                style={styles.icon}
            />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 32,
        height: 54,
        alignItems: "center",
        paddingHorizontal: 22,
        borderRadius: 16,
        borderColor: "gray",
        borderWidth: 1,
        flexDirection: "row",
        marginTop: 12,
    },
    icon: {
        height: 24,
        width: 24,
        marginRight: 32,
    },
    title: {
        fontSize: 14,
        fontFamily: "semiBold",
        color: COLORS.black,
    }
});

export default SocicalButton