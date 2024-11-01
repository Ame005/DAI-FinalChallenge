import React from 'react';
import { View, Text, Button } from 'react-native';

const PlatoDetalle = ({ plate, onAdd, onRemove }) => {
    return (
        <View>
            <Text>{plate.name}</Text>
            <Text>Health Score: {plate.healthScore}</Text>
            <Text>Vegano: {plate.isVegan ? 'Sí' : 'No'}</Text>
            <Button title="Agregar al Menú" onPress={onAdd} />
            <Button title="Eliminar del Menú" onPress={onRemove} />
        </View>
    );
};

export default PlatoDetalle;
