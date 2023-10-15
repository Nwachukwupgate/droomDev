import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });

    // No need for cleanup in this case
  }, [url]);

  return { countries };
};

export default useFetch;
