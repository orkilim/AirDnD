import React, { useEffect, useState } from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios'
import screenDim from './ScreenDimensions';

const CreateGroup = ({ navigation, route }) => {

    const [search, setSearch] = useState("")
    const [user, setUser] = useState({})
    const [days,setDays]=useState(["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"])

    const handleSearch=() => {
        if(search==route.params.user)
        {
            Alert.alert("This is YOUR user, please choose someone else ")
            return;
        }
        axios.get(`https://airdnd-server.herokuapp.com/profile/get?name=${search}`)
            .then((data) => {
                if(data.data.code==1)
                {
                    Alert.alert("User doesn't exist, check your search")
                }
                setUser(data.data.user[0])
                let newDays=["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"]
                for(let i=0;i<=6;i++)
                {
                    if(!(data.data.user[0].days[i]))
                    {
                        newDays.splice(i,1)
                    }
                }              
                setDays(newDays)
            })
            .catch((error) => {
                if (error) {
                    console.log("error in axios in useEffect in CreateGroup is: ", error.response.data.msg)
                    Alert.alert("error in axios in useEffect in CreateGroup is: ", error.response.data.msg)
                }
            })
    }

    return (
        <View style={styles.view}>
            <Text style={styles.Label}>Search: </Text>
            <TextInput placeholderTextColor="white" value={search} onChangeText={(text) => { setSearch(text) }} style={styles.Input} ></TextInput>
            {
                search?(
                <View style={{backgroundColor:"black",borderRadius:5}}>
                    <Text style={styles.Label} >Name: <Text style={styles.userInfo} >{user.name}</Text></Text>
                    <Text style={styles.Label} >Address: <Text style={styles.userInfo} >{user.address}</Text></Text>
                    <Text style={styles.Label} >Allergies: <Text style={styles.userInfo} >{user.allergies}</Text></Text>
                    <Text style={styles.Label} >Car: <Text style={styles.userInfo} >{user.car}</Text></Text>
                    <Text style={styles.Label} >Diet: <Text style={styles.userInfo} >{user.diet}</Text></Text>
                    <Text style={styles.Label} >Availability (Days): <Text style={styles.userInfo} >{days}</Text></Text>
                </View>
                ):null
            }
            <TouchableOpacity style={styles.addGroupButton} onPress={() => {handleSearch()}}>
                    <Text style={{fontFamily: "BlackmoonQuest-PKq5g",color:"white"}}>Search</Text>
                </TouchableOpacity>
        </View>
    )

}

export default CreateGroup;


const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#800080",
        alignItems: "center",
        justifyContent: "center"
    },
    Input: {
        fontFamily: "BlackmoonQuest-PKq5g",
        backgroundColor: "black",
        color: "white",
        borderRadius: 10,
        width: screenDim.width / 3,
        height: screenDim.height / 20,
        marginHorizontal: 10,
        marginBottom:5
    },
    Label: {
        color: "white",
        fontFamily: "BlackmoonQuest-PKq5g"
    },
    userInfo:{
        fontFamily:"BlackmoonQuest-PKq5g",
        color:"gold"
    },
    addGroupButton: {
        fontFamily: "BlackmoonQuest-PKq5g",
        borderColor:"white",
        borderWidth:2,
        borderRadius:5,
        alignItems:"center",
        width:screenDim.width/3


    }
});
