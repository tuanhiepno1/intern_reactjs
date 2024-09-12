const fetchProjects = async () => {
  try {
    const response = await fetch('https://66de5b3fde4426916ee0e9f3.mockapi.io/ListIntern');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

export { fetchProjects };