import React,{useState,useEffect} from 'react';
import screenDim from './ScreenDimensions';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Signup=()=>{

    const [name,setName]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit = async () => {
        try {
          await axios.post('https://airdnd-server.herokuapp.com/profile/signup',{
              name:name,
              password:password
          })
            .then(data => {
              console.log(data.data)
              //setToken(data.data);
              if (data.data) {
                console.log("i have a token")
                return navigation.navigate("Main Menu"/*, {
                  name:name,
                  token: data.data,
                  from: 'Signup',
                }*/);
              }
              Alert.alert(data.data)
            })
            .catch((err)=>{
                if(err){
                    Alert.alert("ERROR!",err)
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
            <TouchableOpacity style={styles.button}>
                <Button title="Sign Up" onPress={() => {handleSubmit()}}>
                    Sign Up
                </Button>
            </TouchableOpacity>
        </View>
    )

}



export default Signup


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
  }
});