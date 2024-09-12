import axios from 'axios';

const API_URL = 'https://66e2427b494df9a478e140e6.mockapi.io/LisProject';

export const fetchProjectList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching project list:', error);
        throw error;
    }
};
