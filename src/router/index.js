import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, Login, Vocation, Home, ForgotPassword, News, Guidelines, Register,  Items, Calendar,  Biodata, Chatting, EnlistDate, ChooseMentor, Procedure } from '../pages';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator  screenOptions={{
      headerShown: false
    }} tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Items"  component={Items}/>
      <Tab.Screen name="Calendar"  component={Calendar}/>
      <Tab.Screen name="Guides" component={Guidelines} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Biodata"
        component={Biodata}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EnlistDate"
        component={EnlistDate}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseMentor"
        component={ChooseMentor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Vocation"
        component={Vocation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Procedure"
        component={Procedure}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;