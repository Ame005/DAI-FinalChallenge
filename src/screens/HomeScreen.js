import React, { useState } from 'react';
import { View } from 'react-native';
import PlateSearch from '../components/PlateSearch';
import PlateItem from '../components/PlateItem';

const Home = () => {
    const [menu, setMenu] = useState([]);

    const addPlateToMenu = (plate) => {
        if (menu.length < 4) {
            setMenu([...menu, plate]);
        } else {
            alert("El menú ya tiene 4 platos.");
        }
    };

    const removePlateFromMenu = (id) => {
        setMenu(menu.filter(plate => plate.id !== id));
    };

    return (
        <View>
            <PlateSearch onAddPlate={addPlateToMenu} />
            {menu.map(plate => (
                <PlateItem key={plate.id} plate={plate} onDelete={removePlateFromMenu} />
            ))}
            {/* Aquí puedes agregar la lógica para mostrar el precio acumulado y el HealthScore promedio */}
        </View>
    );
};

export default Home;
