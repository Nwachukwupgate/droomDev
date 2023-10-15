import { createSlice } from "@reduxjs/toolkit";

// Get the URL query parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the encoded user profile data
const userProfile = urlParams.get("user-profile")
if (userProfile !== null) {
   // Decode the encoded user profile data
   try {
    // Decode the encoded user profile data
    // var userProfile = JSON.parse(decodeURIComponent(encodedProfile));

    var myArrayString = JSON.stringify(userProfile);
    localStorage.setItem('name', myArrayString);

    const newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
}

myArrayString = localStorage.getItem('name');
const userDetails = JSON.parse(myArrayString);


const initialState = {
    token: userDetails,
    stackId: null,
    languageIds: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      addId: (state, {payload}) => {
        state.stackId = payload
      },
      addLanguages: (state, {payload}) => {
        state.languageIds = payload
      },
    }
});

export const { addId, addLanguages } = userSlice.actions; 
export default userSlice.reducer
