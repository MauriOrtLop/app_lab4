import { StyleSheet} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactList from './screens/contactList'
import ContactDetail from './screens/contactDetail'
import CreateContact from './screens/createContact'



const Stack = createNativeStackNavigator()

function MyStack(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={ContactList} options={{title: 'Lista de contactos'}}/>
        <Stack.Screen name="Crear" component={CreateContact} options={{title: 'Crear contacto'}} />
        <Stack.Screen name="Detalles" component={ContactDetail} options={{title: 'Detalles'}} />
      </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
