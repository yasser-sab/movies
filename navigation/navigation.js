import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from "../components/search";
import Details from "../components/details";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Search}
            options={{title: 'search',headerShown:false}}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{title: 'Movie Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };



export default MyStack;
