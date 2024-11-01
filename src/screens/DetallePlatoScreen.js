import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import PlatoDetalle from '../components/PlatoDetalle';
import { getPlateDetails } from '../api/spooncular';

const DetallePlatoScreen = ({ route, navigation }) => {
    const { plateId } = route.params; // Obtener el ID del plato desde la navegación
    const [plate, setPlate] = useState(null);
    const [isInMenu, setIsInMenu] = useState(false); // Estado para verificar si el plato está en el menú

    useEffect(() => {
        const fetchPlateDetails = async () => {
            try {
                const data = await getPlateDetails(plateId.id);
                setPlate(data);
            } catch (error) {
                console.error("Error fetching plate details:", error);
            }
        };
        fetchPlateDetails();
    }, [plateId]);
    

    const handleAdd = () => {
        // Lógica para agregar al menú
        // Aquí deberías verificar si el plato ya está en el menú antes de agregarlo
        // Suponiendo que tienes una función de contexto o prop para agregar el plato
        setIsInMenu(true);
    };

    const handleRemove = () => {
        // Lógica para eliminar del menú
        // Aquí deberías verificar si el plato está en el menú antes de eliminarlo
        setIsInMenu(false);
    };

    if (!plate) {
        return <Text>Cargando...</Text>; // Mostrar un loading mientras se obtienen los datos
    }

    return (
        <View>
            <PlatoDetalle plate={plate} onAdd={handleAdd} onRemove={handleRemove} />
            <Text>Health Score: {plate.healthScore}</Text>
            <Text>Vegano: {plate.vegetarian ? 'Sí' : 'No'}</Text>
            {isInMenu ? (
                <Button title="Eliminar del Menú" onPress={handleRemove} />
            ) : (
                <Button title="Agregar al Menú" onPress={handleAdd} />
            )}
        </View>
    );
};

export default DetallePlatoScreen;