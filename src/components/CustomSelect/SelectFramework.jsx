import React, { useState, useEffect } from 'react';
import CustomSelect from './CustomSelect';
import OutlineButton from '../Button/OutlineButton';
import Button from '../Button';
import { useAddFrameworkMutation, useAddFrameworkExpMutation, useUnChooseFrameworkMutation, useGetFrameworksQuery  } from '../../features/api/apiSlice';
import { toast } from 'react-toastify';
import { addLanguages } from '../../features/userSlice';
import { useDispatch } from 'react-redux';


const SelectFramework = ({ options, onSelect, userLanguages, allLanguages }) => {
  const dispatch = useDispatch();

  const [showEditCard, setShowEditCard] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [value, setValue] = useState('');
  const [styleSelect, setStyledSelect] = useState([])

    // Use the useGetFrameworksQuery hook with allLanguages
    const { data } = useGetFrameworksQuery(allLanguages);

  const [addFramework, {data: lang, isSuccess, error, isError}] = useAddFrameworkMutation()
  const [addFrameworkExp] = useAddFrameworkExpMutation()
  const [unChooseFramework] = useUnChooseFrameworkMutation()

  const handleSelectedValue = (e) => {
    setValue(e[1]);
  };
 
  const editCardHandler = (language) => {
    if (selectedLanguage === language) {
      // If the language is already selected, clicking again cancels the selection.
      setSelectedLanguage(null);
    } 
    if (styleSelect.some((lang) => lang.id === language.id)) {
      // If the language is already styled, clicking again cancels the selection.
      setStyledSelect(styleSelect.filter((lang) => lang.id !== language.id));
      const removeLang= language.id;
      const res = unChooseFramework(removeLang);
    } else {
      // Otherwise, select the language.
      setSelectedLanguage(language);
      setStyledSelect([...styleSelect, language]);
      // Save styleSelect to localStorage
      localStorage.setItem('styleSelect', JSON.stringify(styleSelect));
    }
  };

  const handleSetValue = async () => {
    onSelect(value);
    setShowEditCard(false);
    const exp = options.find((exp) => exp.value === value)
    const langExp = exp.key
    const choosenLang = selectedLanguage.id
    const response = await addFramework(choosenLang);
    const res = await addFrameworkExp(langExp);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(lang?.message)
      setSelectedLanguage(null)
      return;
    }
    if(error?.data?.status === false) {
      toast.error(error?.data?.message)
      setSelectedLanguage(null)
    }
  }, [isSuccess, lang, error])

  const DeleteLang =(language)=> {
    
    setStyledSelect(styleSelect.filter(lang => lang.name !== language.name))
  }

  return (
    <div className="flex">
      {data?.data.map((language) => (
        <div className='mb-2.5 ' key={language.id}>   
          <div
            className={`${
              styleSelect?.includes(language) ? 'bg-red-500' : 'bg-[#B7D3F2]'
            } cursor-pointer gap-2.5 inline-flex py-2.5 px-5 rounded-md mb-2.5 text-primary`}
            onClick={() => editCardHandler(language)}
            key={language.id}
          >
            <span>{language?.name}</span>
            <span className={`${styleSelect?.includes(language) ? 'text-white' : ''}`}>
              {styleSelect?.includes(language) ? 
                <span onClick={() => DeleteLang(language)}>x</span> : 
                <span>+</span>
              }
            </span>
          </div>
          {/* EDIT CARD */}
          {selectedLanguage === language && (
            <div className='px-[18px] py-4 shadow-card border-[0.2px] rounded-lg'>
              <p className='mb-5'>Years of professional experience</p>
              <CustomSelect
                title={'Select years'}
                options={options}
                value={value}
                setValue={handleSelectedValue}
              />
              <div className='flex justify-between mt-5'>
                <OutlineButton 
                  onClick={() => setSelectedLanguage(null)}
                  label={'Cancel'}
                />
                <Button
                  label={'Save'}
                  className={'bg-primary text-white'}
                  onClick={handleSetValue}
                />
              </div>
            </div>
          )}
        </div>
      ))}

    </div>
  );
};

export default SelectFramework;
