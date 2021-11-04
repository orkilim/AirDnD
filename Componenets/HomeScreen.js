import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import screenDim from './ScreenDimensions';


const HomeScreen = ({ navigation,route }) => {

    return (
        <View style={styles.view}>
            <Text style={styles.logo} >Sincon</Text>
            <TouchableOpacity onPress={() => {console.log(route);navigation.navigate("Groups",{user:route.params.user,from:'Main Menu'}) }} style={styles.Button}>
                <Text style={styles.ButtonText} >My Groups and Events</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Profile",{user:route.params.user,from:'Main Menu'}) }} style={styles.Button}>
                <Text style={styles.ButtonText} >Profile</Text>
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
    logo:{
        fontFamily: "BlackmoonQuest-PKq5g",
        color:"gold",
        fontSize:50
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