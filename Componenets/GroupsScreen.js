import React, { useEffect, useState } from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios'
import screenDim from './ScreenDimensions';

const GroupsScreen = ({ navigation, route }) => {

    const [myGroups, setGroups] = useState([])
    const [search, setSearch] = useState("")

    useEffect(async () => {

    }, [])

    useEffect(async () => {
        if (search == "") {
            await axios.get(`https://airdnd-server.herokuapp.com/group/getAll?name=john`)//${route.params.user}
                .then((data) => {
                    if (data.data.code == 1) {
                        console.log(data.data)
                        return;
                    }
                    else {
                        console.log("data is: ", data.data)
                        console.log("hummus")
                        console.log(data.data.groups)
                        setGroups(data.data.groups)
                    }
                })
                .catch((err) => {
                    if (err) {
                        console.log("error in useEffect in GroupsScreen is: ", err)
                        Alert.alert("error in useEffect in GroupsScreen is: ", err.response.data.msg)
                    }
                })
        }
        else {
            console.log("put group searching logic here :)")
        }
    }, [search])


    return (
        <ScrollView contentContainerStyle={{ alignItems: "center", justifyContent: "center" }} style={styles.scrollview}>
            <Text style={styles.Label}>Search: </Text>
            <TextInput placeholderTextColor="white" value={search} onChangeText={(text) => { setSearch(text) }} style={styles.Input} ></TextInput>
                {
                    myGroups.map((element, index) => {
                        return (
                        <View style={styles.group} key={index}>
                            <TouchableOpacity key={index} style={{ borderColor: "white" }} >
                                <Text title={element} style={styles.Text} key={index} onPress={() => { navigation.navigate("showGroup", { groupName: element.name }) }}>{element}</Text>
                            </TouchableOpacity>
                        </View>)
                    })
                }       
            <View>
                    <TouchableOpacity style={styles.addGroupButton} onPress={() => { navigation.navigate("Creategroup", { user: route.params.user, from: "Groups" }) }} >
                        <Text style={{ fontFamily: "BlackmoonQuest-PKq5g", color: "white" }}>Create New Group</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        backgroundColor: "#800080",
    },
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
        height: screenDim.height / 20,
        width: screenDim.height / 5,
        marginBottom:10,
        justifyContent: "center",
        alignItems: "center"

    },
    addGroupButton: {
        fontFamily: "BlackmoonQuest-PKq5g",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 5,
        alignItems: "center",
        marginTop:5,
        justifyContent:"center",
        height:screenDim.height/10,
        width: screenDim.width / 3


    },
    Input: {
        fontFamily: "BlackmoonQuest-PKq5g",
        backgroundColor: "black",
        color: "white",
        borderRadius: 10,
        width: screenDim.width / 3,
        height: screenDim.height / 20,
        marginHorizontal: 10,
        marginBottom: 10
    },
    Label: {
        color: "white",
        fontFamily: "BlackmoonQuest-PKq5g"
    }
});

export default GroupsScreen