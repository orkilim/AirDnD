import React, { useEffect, useState } from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { Alert, Button, StyleSheet, Text,TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios'
import screenDim from './ScreenDimensions';

const GroupsScreen = ({ navigation,route }) => {

    const [myGroups, setGroups] = useState([])
    const [search,setSearch]=useState("")

    useEffect(()=>{
        if(search==""){
        axios.get(`https://airdnd-server.herokuapp.com/group/getAll`)
        .then((data)=>{
            console.log("data is: ",data.data)
            setGroups(data.data)
        })
        .catch((err)=>{
            if(err)
            {
                console.log("error in useEffect in GroupsScreen is: ",err)
                Alert.alert("error in useEffect in GroupsScreen is: ",err.response.data.msg)
            }
        })
    }
    else{
        console.log("put group searching logic here :)")
    }
    },[search])

    
    return (
        <View style={styles.view}>
            <Text style={styles.Label}>Search: </Text>
            <TextInput placeholderTextColor="white" value={search} onChangeText={(text) => { setSearch(text) }} style={styles.Input} ></TextInput>
            <View style={styles.group}>
                {
                    myGroups.map((element, index) => {
                        <TouchableOpacity key={index} style={styles.group} >
                            <Button title={element.group_name} key={index} onPress={()=>{navigation.navigate("showGroup",element.group_name)}}></Button>
                        </TouchableOpacity>
                    })
                }
                <TouchableOpacity style={styles.addGroupButton} onPress={() => {navigation.navigate("Creategroup",{user:route.params.user,from:"Groups"})}} >
                    <Text style={{fontFamily: "BlackmoonQuest-PKq5g",color:"white"}}>Create New Group</Text>
                </TouchableOpacity>
            </View>
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
    Text: {
        fontFamily: "BlackmoonQuest-PKq5g",
        color: "white"
    },
    group: {
        backgroundColor: "black",
        borderRadius: 10,
        color: "white",
        height: screenDim.height / 5,
        width: screenDim.height / 5,
        justifyContent: "center",
        alignItems: "center"

    },
    addGroupButton: {
        fontFamily: "BlackmoonQuest-PKq5g",
        borderColor:"white",
        borderWidth:2,
        borderRadius:5,
        alignItems:"center",
        width:screenDim.width/3


    },
    Input: {
        fontFamily: "BlackmoonQuest-PKq5g",
        backgroundColor: "black",
        color: "white",
        borderRadius: 10,
        width: screenDim.width / 3,
        height: screenDim.height / 20,
        marginHorizontal: 10,
        marginBottom:2
    },
    Label: {
        color: "white",
        fontFamily: "BlackmoonQuest-PKq5g"
    }
});

export default GroupsScreen