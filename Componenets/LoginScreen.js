import React, { useState } from 'react';
import screenDim from './ScreenDimensions';
import axios from 'axios';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen=({navigation,route})=>{

    const [name,setName]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit = async () => {
        try {
          await axios.post('https://airdnd-server.herokuapp.com/profile/login',{
              name:name,
              password:password
          })
            .then(data => {
              console.log(data.data)
              //setToken(data.data);
              if (data.data) {
                console.log("i have a token")
                console.log(data.data)
                navigation.navigate("Main Menu", {user:name,token: data.data,from: 'Login'});
              }
              Alert.alert("Welcome back to Sincon")
            })
            .catch((err)=>{
                if(err){
                    Alert.alert("ERROR!",err.response.data)
                    console.log("error in handleSubmit in login is: ",err.response.data.msg)
                }
                
            })
    
        } catch (err) {
          console.log(`fetch: ${err}`);
        }
      }

    return(
        <View style={styles.view}>
            <Text style={styles.Label}>Name:</Text>
            <TextInput placeholderTextColor="white" value={name} onChangeText={(text) => { setName(text) }} style={styles.Input} ></TextInput>
            <Text style={styles.Label}>Password:</Text>
            <TextInput placeholderTextColor="white" value={password} onChangeText={(text) => { setPassword(text) }} style={styles.Input} ></TextInput>
            <TouchableOpacity style={styles.button} onPress={() => {handleSubmit()}} >
                <Text title="Login" style={styles.text} >
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )

}

export default LoginScreen;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#800080",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"
    },
    Label: {
        color: "white",
        fontFamily: "BlackmoonQuest-PKq5g"
    },
    Input: {
        fontFamily: "BlackmoonQuest-PKq5g",
        backgroundColor: "black",
        color: "white",
        borderRadius: 10,
        width: screenDim.width / 3,
        height: screenDim.height / 20,
        marginHorizontal: 10
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
    }
});