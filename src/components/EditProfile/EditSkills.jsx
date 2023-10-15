import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useGetSkillsMutation, useAddSkillMutation, useUnChooseSkillMutation } from '../../features/api/apiSlice';

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [suggestedData, setSuggestedData] = useState([]);
  const [getSkills, { data: skillData, isLoading }] = useGetSkillsMutation(); 
  const [addSkill, {data: lang, isSuccess, error}] = useAddSkillMutation(); 
  const [unChooseSkill] = useUnChooseSkillMutation(); 

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);
  
    // Fetch data based on the input value
    await getSkills({ name: value }); // Await the mutation with the input value
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
      setSuggestedData([]); // Clear suggested data when adding a tag
    }
  };

  const removeTag = (index) => {
    const newTags = [...tags];
     // Capture the item to be removed
    const removedItem = newTags[index];
    newTags.splice(index, 1);
    setTags(newTags);
    // Notify the user
    // alert(`${removedItem} was removed.`);
    const removeSkill = skillData?.data.filter((skill) => skill.name === removedItem)
    // console.log("removeSkill;", removeSkill);
    const removedSkill = removeSkill.length > 0 ? removeSkill[0] : null; // Get the first (and only) element
    // console.log("removedSkill:", removedSkill);
    const removeSkillApi = removedSkill?.id
  };

  const handleSuggestedItemClick = async (item) => {
    setTags([...tags, item.name]);
    const choosenSkill = item?.id
    await addSkill(choosenSkill)
    setInputValue('');
    setSuggestedData([]); // Clear suggested data when selecting an item
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(lang?.message)
      return;
    }
    if(error?.data?.status === false) {
      toast.error(error?.data?.message)
    }
  }, [isSuccess, lang, error])

  // Display the fetched data as suggestions
  const suggestedSkills = skillData ? skillData.data : [];
  // console.log("suggestedSkills;", suggestedSkills);
  return (
    <div className="relative">
      <div className="flex flex-wrap items-center">
        {tags.map((tag, index) => (
          <div key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md m-1">
            {tag}
            <button className="ml-2 text-red-500" onClick={() => removeTag(index)}>
              <span className="sr-only">Remove</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
      <input
        className="w-full border border-gray-300 rounded-md py-2 px-4 mt-2"
        type="text"
        placeholder="Enter skills (e.g., git)"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      {suggestedSkills.length > 0 && (
        <div className="absolute left-0 z-20 w-full max-h-52 overflow-y-auto py-1 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
          {suggestedSkills.map((item) => (
            <p
              key={item.id}
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
              onClick={() => handleSuggestedItemClick(item)}
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
      {isLoading && <div className="absolute left-0 z-30 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-75"><div className="spinner"></div></div>}
    </div>
  );
};

export default TagInput;
