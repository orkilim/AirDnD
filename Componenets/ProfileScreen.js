import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import screenDim from './ScreenDimensions';
//import DropDownPicker from 'react-native-dropdown-picker';
import SelectDropdown from 'react-native-select-dropdown'
import CheckBox from 'react-native-check-box'
import axios from 'axios'

const ProfileScreen = ({ navigation }) => {

    const [days, setDays] = useState([true, true, true, true, true, true, true])
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [allergies, setAllergies] = useState("")
    const [car, setCar] = useState("")
    const [diet, setDiet] = useState("")

    const carOptions = ["Has a car", "Doesn't have a car"]
    const dietOptions = ["Omnivore", "Vegetarian", "Vegan", "Other"]

    const handleClick = async (myObj) => {
        try {
            const newObj={
                name: myObj.name,
                address: myObj.address,
                car: myObj.car,
                diet: myObj.diet,
                allergies: myObj.allergies,
                days: myObj.days
            }
            console.log(newObj)
            console.log(typeof newObj)
            axios.post('https://airdnd-server.herokuapp.com/profile/add', {
                "name": myObj.name,
                "address": myObj.address,
                "car": myObj.car,
                "diet": myObj.diet,
                "allergies": myObj.allergies,
                "days": myObj.days
            })
            .then((data)=>{
                console.log(data)
                navigation.navigate("Main Menu")
            })
            .catch((err)=>{
                if(err)
                {
                    console.log("error in ProfileScreen in handleClick is: ",err)
                }
            })
        } catch (error) {
            if (error)
                console.log("error on handleClick on Profile page is: " + error)
        }
    }

    return (
        <View style={styles.Main}>
            <View style={styles.view}>
                <Text style={styles.Label}>Name:</Text>
                <TextInput placeholderTextColor="white" value={name} onChangeText={(text) => { setName(text) }} style={styles.Input} ></TextInput>
                <Text style={styles.Label}>Address:</Text>
                <TextInput placeholderTextColor="white" value={address} onChangeText={(text) => { setAddress(text) }} style={styles.Input} ></TextInput>
            </View>
            <View style={{ ...styles.view, width: screenDim.width }}>
                <TextInput multiline={true} placeholderTextColor="white" value={allergies} onChangeText={(text) => { setAllergies(text) }} style={{ ...styles.Input, height: 100 }} placeholder="allergies and things to notice" ></TextInput>
                <SelectDropdown
                    defaultButtonText="Car Available?"
                    data={carOptions}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={{ fontFamily: "BlackmoonQuest-PKq5g", color: "white" }}
                    onSelect={(selectedItem, index) => {
                        setCar(selectedItem)
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
            </View>
            <View style={styles.view}>
                <SelectDropdown
                    defaultButtonText="Eating Habits"
                    data={dietOptions}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={{ fontFamily: "BlackmoonQuest-PKq5g", color: "white" }}
                    onSelect={(selectedItem, index) => {
                        setDiet(selectedItem)
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
            </View>
            <View style={styles.checkBoxView}>
                {
                    //availability during the week
                }
                <CheckBox
                    style={styles.CheckBox}
                    onClick={() => {
                        let newDays = [...days]
                        newDays[0] = !newDays[0]
                        setDays(newDays)
                    }}
                    isChecked={days[0]}
                    leftText={"Sunday"}
                    leftTextStyle={styles.checkBoxText}
                />
                <CheckBox
                    style={styles.CheckBox}
                    onClick={() => {
                        let newDays = [...days]
                        newDays[1] = !newDays[1]
                        setDays(newDays)
                    }}
                    isChecked={days[1]}
                    leftText={"Monday"}
                    leftTextStyle={styles.checkBoxText}
                />
                <CheckBox
                    style={styles.CheckBox}
                    onClick={() => {
                        let newDays = [...days]
                        newDays[2] = !newDays[2]
                        setDays(newDays)
                    }}
                    isChecked={days[2]}
                    leftText={"Tuesday"}
                    leftTextStyle={styles.checkBoxText}
                />
                <CheckBox
                    style={styles.CheckBox}
                    onClick={() => {
                        let newDays = [...days]
                        newDays[3] = !newDays[3]
                        setDays(newDays)
                    }}
                    isChecked={days[3]}
                    leftText={"Wednsday"}
                    leftTextStyle={styles.checkBoxText}
                />
                <CheckBox
                    style={styles.CheckBox}
                    onClick={() => {
                        let newDays = [...days]
                        newDays[4] = !newDays[4]
                        setDays(newDays)
                    }}
                    isChecked={days[4]}
                    leftText={"Thursday"}
                    leftTextStyle={styles.checkBoxText}
                />
                <CheckBox
                    style={styles.CheckBox}
                    onClick={() => {
                        let newDays = [...days]
                        newDays[5] = !newDays[5]
                        setDays(newDays)
                    }}
                    isChecked={days[5]}
                    leftText={"Friday"}
                    leftTextStyle={styles.checkBoxText}
                />
                <CheckBox
                    style={styles.CheckBox}
                    onClick={() => {
                        let newDays = [...days]
                        newDays[6] = !newDays[6]
                        setDays(newDays)
                    }}
                    isChecked={days[6]}
                    leftText={"Saturday"}
                    leftTextStyle={styles.checkBoxText}
                />
            </View>
            <View>
                <TouchableOpacity style={{ marginBottom: 20 }}>
                    <Button onPress={() => {
                        const myObj = {
                            name: name,
                            address: address,
                            car: car,
                            diet: diet,
                            allergies: allergies,
                            days: days
                        }
                        handleClick(myObj)

                    }} title="Save Data"></Button>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Main: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#800080",
        alignItems: "center",
        //alignContent:"center"
    },
    view: {
        flexDirection: "row",
        //backgroundColor: "green",
        marginVertical: screenDim.height / 30,
        alignItems: "center"
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
    dropdown: {
        width: screenDim.width / 2,
        backgroundColor: "black",
        borderRadius: 10
    },
    Label: {
        color: "white",
        fontFamily: "BlackmoonQuest-PKq5g"
    },
    CheckBox: {
        width: screenDim.width / 2,
        flexDirection: "column",

    },
    checkBoxView: {
        //backgroundColor: "green",
        flex: 7

    },
    checkBoxText: {
        color: "white",
        fontFamily: "BlackmoonQuest-PKq5g",
        marginBottom: 10
    }

});

export default ProfileScreen



/**
 * <DropDownPicker
                    placeholder="do you have a car?"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.dropdown}
                    textStyle={{backgroundColor:"black",fontFamily:"BlackmoonQuest-PKq5g",color:"white"}}

                />
 */


/*const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [items, setItems] = useState([
{ label: "Don't have a car", value: 'none' },
{ label: 'Have a car', value: 'car' }
]);*/
