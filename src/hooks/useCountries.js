import countries from 'world-countries';

const formattedCountries = countries.map((country) => country.name.common);
const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value) => {
    return formattedCountries.find((item) => item.value === value);
  };
  return {
    getAll,
    getByValue,
  };
};

export default useCountries;
