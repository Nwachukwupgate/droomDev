import useCountries from '../../hooks/useCountries';
import Select from 'react-select';

const CountrySelect = ({ value, onChange }) => {
  const { getAll } = useCountries();

  console.log(getAll());

  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: (state.isFocused || state.hover) && 'transparent',
      outlineColor: (state.isFocused || state.hover) && 'transparent',
      padding: '12px',
    }),
    input: (baseStyles, state) => ({
      ...baseStyles,
      margin: '0px',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: '#575555',
      outline: 0,
      borderColor: 'transparent',
    }),
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: '#999',
    }),
  };

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
          // control: () => 'p-3 border-2',
          input: () => 'text-lg m-0',
          option: () => 'text-lg',
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          border: 0,
          colors: {
            ...theme.colors,
            primary: '#e3e3e3',
            primary25: '#ededed',
          },
        })}
        styles={styles}
      />
    </div>
  );
};

export default CountrySelect;
