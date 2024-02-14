// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configuracao from '../configuracao/configuracao'
import InformacoesScreen from '../configuracao/InformacoesScreen';
import CartoesScreen from '../configuracao/CartoesScreen.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="configuracao" component={configuracao} options={{
        headerShown:false, }} /> 
        <Stack.Screen name="CartoesScreen" component={CartoesScreen} options={{
        headerShown:false, }} />
        <Stack.Screen name="InformacoesScreen" component={InformacoesScreen} options={{
        headerShown:false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;