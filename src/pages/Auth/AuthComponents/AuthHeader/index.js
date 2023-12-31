import React from "react"
import { Pressable, Text, View, Image } from "react-native"
import { styles } from "./style"

const AuthHeader = ({ title, onBackPress }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onBackPress}>
                <Image style={styles.image} source={require('../../../../../assets/images/authImages/Authback.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default AuthHeader