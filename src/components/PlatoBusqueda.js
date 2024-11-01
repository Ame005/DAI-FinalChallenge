import React, { useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import axios from 'axios';
import PlateItem from './PlateItem';

const PlateSearch = ({ onAddPlate }) => {
    const [query, setQuery] = useState('');
    const [plates, setPlates] = useState([]);

    const searchPlates = async () => {
        if (query.length < 3) return;

        const response = await axios.get(`API_URL/search?query=${query}`);
        setPlates(response.data); // Asegúrate de adaptar esto a la estructura de tu API
    };

    return (
        <View>
            <TextInput
                placeholder="Buscar platos"
                value={query}
                onChangeText={text => {
                    setQuery(text);
                    searchPlates();
                }}
            />
            <FlatList
                data={plates}
                renderItem={({ item }) => (
                    <PlateItem plate={item} onAddPlate={onAddPlate} />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default PlateSearch;
