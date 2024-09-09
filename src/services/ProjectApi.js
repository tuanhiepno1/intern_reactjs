const fetchProjects = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/7f6cf803-18c0-456a-b63c-2971d1b30206');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  export { fetchProjects };