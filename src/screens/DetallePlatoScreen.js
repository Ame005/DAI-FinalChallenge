import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import PlatoDetalle from '../components/PlatoDetalle';
import { getPlateDetails } from '../api/spooncular';

const DetallePlatoScreen = ({ route }) => {
    const { plateId } = route.params; // Obtener el ID del plato desde la navegación
    const [plate, setPlate] = useState(null);

    useEffect(() => {
        const fetchPlateDetails = async () => {
            const data = await getPlateDetails(plateId);
            setPlate(data);
        };
        fetchPlateDetails();
    }, [plateId]);

    const handleAdd = () => {
        // Lógica para agregar al menú
    };

    const handleRemove = () => {
        // Lógica para eliminar del menú
    };

    return (
        <View>
            <PlatoDetalle plate={plate} onAdd={handleAdd} onRemove={handleRemove} />
        </View>
    );
};

export default DetallePlatoScreen;
