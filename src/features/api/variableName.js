import axios from 'axios';
import { useSelector } from 'react-redux';

// Define a function to get variable names

const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      return 'https://api.droomwork.io';
    } else {
      return process.env.REACT_APP_BASE_URL;
    }
};

const VariableNames = async (number) => {
    const { token } = useSelector((store) => store.user);
  try {
    // Make an API call to fetch variable names
    const headers = {
        Authorization: `Bearer ${token}`, // Add the token with "Bearer" scheme
      };
  
      // Make an API call to fetch variable names with the token in the headers
      const response = await axios.get(
        `${getBaseUrl()}api/v1/all/getCbtParamsRealname/${number}/stacks`,
        { headers }
      );
    console.log("first response", response);
    if (response.status === 200) {
      // Assuming the response contains data with variable names
      console.log("the response", response)
      const variableNames = response?.data?.data; // Replace with the actual property name
      return variableNames;
    } else {
      // Handle other response status codes or errors
      throw new Error('Failed to fetch variable names');
    }
  } catch (error) {
    // Handle any network or API errors
    console.error('API call error:', error);
    throw error;
  }
};

export default VariableNames;
