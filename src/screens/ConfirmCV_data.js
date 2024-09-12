import React, { useState, useEffect } from 'react';
import ConfirmCV from './ConfirmCV';
import { fetchCVData } from '../services/ProjectApi_cv';

const ProjectApiCV = () => {
    const [cvData, setCvData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await fetchCVData();
                console.log('Fetched CV data:', data); // Log dữ liệu đã fetch
                setCvData(data);
            } catch (error) {
                console.error('Error fetching CV data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    console.log('Current cvData:', cvData); // Log dữ liệu hiện tại

    return <ConfirmCV cvData={cvData} loading={loading} />;
};

export default ProjectApiCV;
