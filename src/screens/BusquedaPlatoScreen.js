import React from 'react';
import { View } from 'react-native';
import PlatoBusqueda from '../components/PlatoBusqueda';
import { useNavigation } from '@react-navigation/native';

const BusquedaPlatoScreen = ({ navigation }) => {
    const handleAddPlate = (plate) => {
        // Aquí puedes manejar la lógica para agregar el plato al menú
        console.log("Plato agregado:", plate);
    };

    return (
        <View>
            <PlatoBusqueda onAddPlate={handleAddPlate} />
        </View>
    );
};

export default BusquedaPlatoScreen;
