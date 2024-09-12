import axios from 'axios';

const API_URL = 'https://66e2427b494df9a478e140e6.mockapi.io/ListPosition';

export const fetchPositionData = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log('Fetched position data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching position data:', error);
        throw error;
    }
};
