import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Register from './screens/Register';
import Remove from './screens/RemoveData';
import Servicos from './screens/Servicos';
import Empregos from './screens/Empregos';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Remove"
          component={Remove}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Servicos"
          component={Servicos}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Empregos"
          component={Empregos}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
