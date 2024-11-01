import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const PlatoItem = ({ plate, onDelete, onViewDetail }) => {
    return (
        <View>
            <Text>{plate.name}</Text>
            <Image source={{ uri: plate.image }} style={{ width: 100, height: 100 }} />
            <Button title="Ver Detalle" onPress={() => onViewDetail(plate)} />
            <Button title="Eliminar" onPress={() => onDelete(plate.id)} />
        </View>
    );
};

export default PlatoItem;
