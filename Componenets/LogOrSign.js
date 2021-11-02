import React from 'react';
import screenDim from './ScreenDimensions';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LogOrSign = ({ navigation }) => {

    return (
        <View style={styles.view}>
            <Text style={styles.title} >Welcome to Sincon</Text>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Login") }} >
                <Text title="Login" style={styles.text}  >
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Signup") }} >
                <Text title="Sign Up" style={styles.text} >
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    )

}

export default LogOrSign


const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#800080",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        elevation: 8,
        backgroundColor: "black",
        borderRadius: 10,
        marginVertical:screenDim.height/20,
        //paddingVertical: 10,
        //paddingHorizontal: 12,
        width: screenDim.width /3,
        height:screenDim.height/10,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:"white",
        fontFamily:"BlackmoonQuest-PKq5g"
    },
    title:{
        color:"gold",
        fontFamily:"BlackmoonQuest-PKq5g",
        fontSize:30,
    }
});