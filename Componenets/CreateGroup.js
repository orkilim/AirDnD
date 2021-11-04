import React, { useEffect, useState } from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { Alert, Button, ScrollView,StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios'
import screenDim from './ScreenDimensions';

const CreateGroup = ({ navigation, route }) => {

    const [search, setSearch] = useState("")
    const [user, setUser] = useState({})
    const [days, setDays] = useState([])
    const [groupName, setGroupName] = useState("")
    const [peopleInGroup,setPeopleInGroup]=useState([])

    //#region Handlers

    const handleSearch = () => {
        if (search == route.params.user) {
            Alert.alert("This is YOUR user, please choose someone else ")
            return;
        }
        axios.get(`https://airdnd-server.herokuapp.com/profile/get?name=${search}`)
            .then((data) => {
                if (data.data.code == 1) {
                    Alert.alert("User doesn't exist, check your search")
                }
                setUser(data.data.user[0])
                let newDays = ["Sunday,", "Monday,", "Tuesday,", "Wednsday,", "Thursday,", "Friday,", "Saturday"]
                for (let i = 0; i <= 6; i++) {
                    if (!(data.data.user[0].days[i])) {
                        newDays.splice(i, 1)
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

    const handleAdd=()=>{
        if(search=="")
        {
            return Alert.alert("please type a user's name")
        }
        else if(search in peopleInGroup)
        {
            return Alert.alert("person already in group")
        }
        let temp=[...peopleInGroup,`${search},`]
        setPeopleInGroup(temp)
    }

    const handleRemove=()=>{
        if(search=="")
        {
            return Alert.alert("please type a user's name")
        }
        else if(!(search in peopleInGroup))
        {
            return Alert.alert("person not in group")
        }
        let temp=[...peopleInGroup]
        const index=temp.indexOf(search)
        temp.splice(index,1)
        setPeopleInGroup(temp)
    }

    const handleFinalize=()=>{
        if(peopleInGroup==[])
        {
            return Alert.alert("group is empty, either fill it or go back to group page")
        }
        axios.post(`https://airdnd-server.herokuapp.com/group/add`,{
            name:groupName,
            people:peopleInGroup,
            userName:route.params.user
        })
        .then((data)=>{
            console.log(data.data)
            navigation.navigate("Groups",{user:route.params.user,from:"Creategroup"})
        })
        .catch((err)=>{
            if(err)
                console.log("error in handleFinalize is: ",err)
        })
    }

    //#endregion

    return (
        <ScrollView contentContainerStyle={{alignItems: "center",justifyContent: "center"}} style={styles.scrollview}>
            <Text style={styles.Label}>Group Name: </Text>
            <TextInput placeholderTextColor="white" value={groupName} onChangeText={(text) => { setGroupName(text) }} style={styles.Input} ></TextInput>
            <Text style={styles.Label}>Search Person: </Text>
            <TextInput placeholderTextColor="white" value={search} onChangeText={(text) => { setSearch(text) }} style={styles.Input} ></TextInput>

            <View style={{ backgroundColor: "black", borderRadius: 5,marginBottom:5,width:screenDim.width*0.7 }}>
                <Text style={styles.Label} >Address: <Text style={styles.userInfo} >{user.address}</Text></Text>
                <Text style={styles.Label} >Allergies: <Text style={styles.userInfo} >{user.allergies}</Text></Text>
                <Text style={styles.Label} >Car: <Text style={styles.userInfo} >{user.car}</Text></Text>
                <Text style={styles.Label} >Diet: <Text style={styles.userInfo} >{user.diet}</Text></Text>
                <Text style={styles.Label} >Availability (Days): <Text style={styles.userInfo} >{days}</Text></Text>
            </View>

            <TouchableOpacity style={[styles.addNremove,{borderColor:"white",borderWidth:3}]} onPress={() => { handleSearch() }}>
                <Text style={{ fontFamily: "BlackmoonQuest-PKq5g", color: "white" }}>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.addNremove,{backgroundColor:"green"}]} onPress={() => { handleAdd() }}>
                <Text style={{ fontFamily: "BlackmoonQuest-PKq5g", color: "white" }}>Add Person</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.addNremove,{backgroundColor:"red"}]} onPress={() => { handleRemove() }}>
                <Text style={{ fontFamily: "BlackmoonQuest-PKq5g", color: "white" }}>Remove Person</Text>
            </TouchableOpacity>
            
            <View style={{ backgroundColor: "black", borderRadius: 5,marginBottom:5}} >
            <Text style={styles.people}>People in Group:{"\n"}{peopleInGroup} </Text>
            </View>

            <TouchableOpacity style={[styles.addGroupButton,{backgroundColor:"blue"}]} onPress={() => { handleFinalize() }}>
                <Text style={{ fontFamily: "BlackmoonQuest-PKq5g", color: "white" }}>Finalize Group</Text>
            </TouchableOpacity>

        </ScrollView>
    )

}

export default CreateGroup;


const styles = StyleSheet.create({
    scrollview:{
        flex: 1,
        backgroundColor: "#800080",
    },
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
        marginBottom: 5
    },
    Label: {
        color: "white",
        fontFamily: "BlackmoonQuest-PKq5g"
    },
    userInfo: {
        fontFamily: "BlackmoonQuest-PKq5g",
        color: "gold"
    },
    addGroupButton: {
        fontFamily: "BlackmoonQuest-PKq5g",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 5,
        alignItems: "center",
        marginBottom:5,
        width: screenDim.width / 3


    },
    people:{
        fontFamily: "BlackmoonQuest-PKq5g",
        color: "white",
        width:screenDim.width*0.7,
        height:screenDim.height/10,
        textAlign:"center"
    },
    addNremove:{
        marginBottom:5,
        borderRadius:5,
        width:screenDim.width/3,
        alignItems:"center",
        justifyContent:"center",
        height:screenDim.height/10
    }
});
