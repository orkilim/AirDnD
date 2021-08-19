import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import screenDim from './ScreenDimensions';
import DropDownPicker from 'react-native-dropdown-picker';

const ProfileScreen = ({ navigation }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Don't have a car", value: 'none' },
        { label: 'Have a car', value: 'car' }
    ]);

    return (
        <View style={styles.Main}>
            <View style={styles.view}>
                <TextInput placeholderTextColor="white" style={styles.Input} placeholder="name" ></TextInput>
                <TextInput placeholderTextColor="white" style={styles.Input} placeholder="address" ></TextInput>
            </View>
            <View style={{...styles.view,width:screenDim.width}}>
                <TextInput placeholderTextColor="white" style={{ ...styles.Input, height: 100 }} placeholder="allergies and things to notice" ></TextInput>
                <DropDownPicker
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
        backgroundColor: "green",
        marginVertical: screenDim.height / 20,
        alignItems:"center"
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
    dropdown:{
        width:screenDim.width/2,
        backgroundColor:"black"
        
    }
});

export default ProfileScreen




