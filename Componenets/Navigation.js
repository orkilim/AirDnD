import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'
import GroupsScreen from './GroupsScreen.js'
import ProfileScreen from './ProfileScreen.js'

const Stack = createNativeStackNavigator();

const options={
    headerTintColor:"gold",
    headerStyle:{
        backgroundColor:"#800080"
    },
    headerShadowVisible:false,
    headerTitleStyle:{
        fontFamily:"BlackmoonQuest-PKq5g",
    }
}

const Navigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main Menu">
                <Stack.Screen options={{headerShown: false}} name="Main Menu" component={HomeScreen} />
                <Stack.Screen options={options} name="Groups" component={GroupsScreen} />
                <Stack.Screen options={options} name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({
    statusBar:{
        backgroundColor: "#800080"
    }
})