import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import screenDim from './ScreenDimensions';


const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => { navigation.navigate("Groups") }} style={styles.Button}>
                <Text style={styles.ButtonText} >Groups</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Profile") }} style={styles.Button}>
                <Text style={styles.ButtonText} >profile</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#800080",
        alignItems: "center",
        justifyContent: "center"
    },
    ButtonText:{
        color:"white",
        fontFamily: "BlackmoonQuest-PKq5g",
    },
    Button: {
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

export default HomeScreen