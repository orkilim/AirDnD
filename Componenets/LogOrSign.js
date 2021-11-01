import React from 'react';
import screenDim from './ScreenDimensions';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LogOrSign = ({ navigation }) => {

    return (
        <View style={styles.view}>
            <TouchableOpacity style={styles.button}>
                <Button title="Login" onPress={() => { navigation.navigate("Login") }} >
                    Login
                </Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button title="Sign Up" onPress={() => { navigation.navigate("Signup") }}>
                    Sign Up
                </Button>
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
    }
});