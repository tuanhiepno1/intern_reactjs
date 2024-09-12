import axios from 'axios';

const API_URL = 'https://66de5b3fde4426916ee0e9f3.mockapi.io/listCV';

export const fetchCVData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching CV data:', error);
        throw error;
    }
};
