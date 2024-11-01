import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                {/* Aquí puedes agregar la pantalla de detalle si lo deseas */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;