import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../../screens/AuthScreens/Login';
import React from 'react';
import Register from '../../../screens/AuthScreens/Register';
import Splash from '../../../screens/Splash';


const Stack = createStackNavigator();

 const AuthStack =()=> {
  return (
    <>
     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
     <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </>
  )
}
export default AuthStack