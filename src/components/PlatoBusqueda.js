import React, { useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import axios from 'axios';
import PlatoItem from './PlatoItem';

const PlatoBusqueda = ({ onAddPlate }) => {
    const [query, setQuery] = useState('');
    const [platos, setPlatos] = useState([]);

    const searchPlatos = async () => {
        if (query.length < 3) return;

        const response = await axios.get(`API_URL/search?query=${query}`);
        setPlatos(response.data); // Asegúrate de adaptar esto a la estructura de tu API
    };

    return (
        <View>
            <TextInput
                placeholder="Buscar platos"
                value={query}
                onChangeText={text => {
                    setQuery(text);
                    searchPlatos();
                }}
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
