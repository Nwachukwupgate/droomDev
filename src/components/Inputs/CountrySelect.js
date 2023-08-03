import useCountries from '../../hooks/useCountries';
import Select from 'react-select';
import './Country.css';

const CountrySelect = ({ value, onChange }) => {
  const { getAll } = useCountries();
  console.log(value);
  return (
    <div>
      <Select
        placeholder='Anywhere'
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value)}
        formatOptionalLabel={(option) => (
          <div className='flex flex-row items-center gap-3'>
            <div>{option.flag} </div>
            <div>
              {option.label},
              <span className='text-neutral-500 ml-1'>{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg m-0',
          option: () => 'text-lg',
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6',
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
