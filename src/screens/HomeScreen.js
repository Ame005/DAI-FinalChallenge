import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PlatoBusqueda from '../components/PlatoBusqueda';
import PlatoItem from '../components/PlatoItem';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const [menu, setMenu] = useState([]);

    // Función para agregar un plato al menú
    const addPlateToMenu = (plate) => {
        const veganCount = menu.filter(p => p.vegan).length;
        const nonVeganCount = menu.filter(p => !p.vegan).length;

        // Validación para el número de platos y tipos
        if (menu.length < 4) {
            if ((plate.vegan && veganCount < 2) || (!plate.vegan && nonVeganCount < 2)) {
                setMenu([...menu, plate]);
            } else {
                alert("El menú debe tener 2 platos veganos y 2 no veganos.");
            }
        } else {
            alert("El menú ya tiene 4 platos.");
        }
    };

    // Función para eliminar un plato del menú
    const removePlateFromMenu = (id) => {
        setMenu(menu.filter(plate => plate.id !== id));
    };

    // Cálculo del precio acumulativo
    const totalPrice = menu.reduce((total, plate) => total + plate.price, 0);

    const viewPlateDetail = (plate) => {
        navigation.navigate('Detalle', { plate });
    };

    // Cálculo del promedio de HealthScore
    const averageHealthScore = menu.length > 0 
        ? (menu.reduce((total, plate) => total + plate.healthScore, 0) / menu.length).toFixed(2) 
        : 0;

    return (
        <View>
            <PlatoBusqueda onAddPlate={addPlateToMenu} onViewDetail={viewPlateDetail}/>
            {menu.map(plate => (
                <PlatoItem key={plate.id} plate={plate}  onDelete={removePlateFromMenu} onViewDetail={viewPlateDetail}/>
            ))}
            <Text>Precio Total: ${totalPrice}</Text>
            <Text>Puntuación Saludable Promedio: {averageHealthScore}</Text>
        </View>
    );
};

export default Home;