import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Login=({navigation}:any)=> {

    const navigationScreen=()=>{
        navigation.navigate("Register")
    }
  return (
    <View>
    <TouchableOpacity
    >

      <Text>Navigation</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Login