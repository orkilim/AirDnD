import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Button, StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import axios from 'axios'
import screenDim from './ScreenDimensions';

const GroupsScreen=({navigation})=>{

    return(
        <View style={styles.view}>
            <View style={styles.group}>
                <Text style={styles.Text}>Test Group</Text>
            </View>
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
      color:"white"
      
  },
  group:{
      backgroundColor:"black",
      borderRadius:10,
      color:"white",
      height:screenDim.height/5,
      width:screenDim.height/5,
      justifyContent:"center",
      alignItems:"center"
      
  }
});

export default GroupsScreen