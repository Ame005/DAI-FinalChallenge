import axios from 'axios';

const API_KEY = '7470bdada8a1435db108ac43086ff5f1'; // Reemplaza esto con tu clave de API
const BASE_URL = 'https://api.spoonacular.com'; // Asegúrate de que sea el URL correcto

export const fetchPlatos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/food/products`, {
            params: {
                apiKey: API_KEY,
            },
        });
        return response.data.products; // Asegúrate de que esto se ajuste a la respuesta de la API
    } catch (error) {
        console.error("Error fetching platos:", error);
        throw error;
    }
};

export const searchPlatos = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/recipes/complexSearch`, {
            params: {
                apiKey: API_KEY,
                query,
                number: 10, // Puedes ajustar este número según lo que necesites
            },
        });
        return response.data.results; // Asegúrate de que esto se ajuste a la respuesta de la API
    } catch (error) {
        console.error("Error searching platos:", error);
        throw error;
    }
};

export const getPlateDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/recipes/${id}/information`, {
            params: {
                apiKey: API_KEY,
            },
        });
        return response.data; // Ajusta según lo que necesites de la respuesta
    } catch (error) {
        console.error("Error fetching plate details:", error);
        throw error;
    }
};