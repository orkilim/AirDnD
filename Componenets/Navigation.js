import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'
import GroupsScreen from './GroupsScreen.js'
import ProfileScreen from './ProfileScreen.js'
import LoginScreen from './LoginScreen.js'
import LogOrSign from './LogOrSign';
import Signup from './Signup';
import CreateGroup from './CreateGroup';

const Stack = createNativeStackNavigator();

const options = {
    headerTintColor: "gold",
    headerStyle: {
        backgroundColor: "#800080"
    },
    headerShadowVisible: false,
    headerTitleStyle: {
        fontFamily: "BlackmoonQuest-PKq5g",
    }
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Groups">
                <Stack.Screen options={{ headerShown: false }} name="LogOrSign" component={LogOrSign} />
                <Stack.Screen options={options} name="Signup" component={Signup} />
                <Stack.Screen options={options} name="Login" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Main Menu" component={HomeScreen} />
                <Stack.Screen options={options} name="Groups" component={GroupsScreen} />
                <Stack.Screen options={options} name="Profile" component={ProfileScreen} />
                <Stack.Screen options={options} name="Creategroup" component={CreateGroup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#800080"
    }
})