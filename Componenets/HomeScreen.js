import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet,Text,View} from 'react-native';

const HomeScreen=({Navigation})=>{

    return(
        <View style={styles.view}>
            <Text style={{fontFamily:"BlackmoonQuest-PKq5g"}}>hello world!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  view:{
      flex:1,
      backgroundColor:"#800080",
      alignItems:"center",
      justifyContent:"center"
  },
  Text:{
      fontFamily:"BlackmoonQuest-PKq5g",
      
  }
});

export default HomeScreen