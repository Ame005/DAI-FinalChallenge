import React, { useState } from 'react';
import { View } from 'react-native';
import PlatoBusqueda from '../components/PlatoBusqueda';
import PlatoItem from '../components/PlatoItem';

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
            <PlatoBusqueda onAddPlate={addPlateToMenu} />
            {menu.map(plate => (
                <PlatoItem key={plate.id} plate={plate} onDelete={removePlateFromMenu} />
            ))}
            {/* Aquí puedes agregar la lógica para mostrar el precio acumulado y el HealthScore promedio */}
        </View>
    );
};

export default Home;
