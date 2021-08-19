import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'

const Stack = createNativeStackNavigator();

const options={
    title:"Main Menu",
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
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen options={options} name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation