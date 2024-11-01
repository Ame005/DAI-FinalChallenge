import React, { useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import PlatoItem from './PlatoItem';
import { searchPlatos } from '../api/spooncular'; // Asegúrate de que la ruta sea correcta

const PlatoBusqueda = ({ onAddPlate }) => {
    const [query, setQuery] = useState('');
    const [platos, setPlatos] = useState([]);

    const handleSearch = async (text) => {
        setQuery(text);
        if (text.length < 3) {
            setPlatos([]); // Limpiar resultados si el texto es menor a 3 caracteres
            return;
        }
        try {
            const results = await searchPlatos(text);
            setPlatos(results);
        } catch (error) {
            console.error("Error searching platos:", error);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Buscar platos"
                value={query}
                onChangeText={handleSearch}
            />
            <FlatList
                data={platos}
                renderItem={({ item }) => (
                    <PlatoItem plate={item} onAddPlate={onAddPlate} />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default PlatoBusqueda;