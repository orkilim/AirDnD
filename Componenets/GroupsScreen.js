import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios'
import screenDim from './ScreenDimensions';

const GroupsScreen = ({ navigation }) => {

    const [myGroups, setGroups] = useState([])

    useEffect(()=>{
        axios.get(`https://airdnd-server.herokuapp.com/group/getAll`)
        .then((data)=>{
            console.log("data is: ",data)
            setGroups(data.data)
        })
        .catch((err)=>{
            if(err)
            {
                console.log("error in useEffect in GroupsScreen is: ",err)
            }
        })
    },[myGroups])

    const handleAddGroup=()=>{
        let arr=[...myGroups,{group_name:"",people:[]}]
        setGroups(arr)
    }

    return (
        <View style={styles.view}>
            <View style={styles.group}>
                {
                    myGroups.map((element, index) => {
                        <TouchableOpacity key={index} style={styles.group} >
                            <Button title={element.group_name} key={index} onPress={()=>{navigation.navigate("showGroup",element.group_name)}}></Button>
                        </TouchableOpacity>
                    })
                }
                <TouchableOpacity style={styles.addGroupButton} >
                    <Button title="Create New Group" onPress={() => {handleAddGroup}} ></Button>
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
        backgroundColor: "blue",
        color: "white",
        fontFamily: "BlackmoonQuest-PKq5g"
    }
});

export default GroupsScreen