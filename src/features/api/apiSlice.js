import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      return 'https://api.droomwork.io';
    } else {
      return process.env.REACT_APP_BASE_URL;
    }
};
  
  
export const apiSlice = createApi({
  
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseUrl(),
        mode: "cors",
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            headers.set(
                'Accept', '*/*',
            );
            headers.set('Accept', 'application/json');
            headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            return headers
        }
    }),
    tagTypes: ['Dashboard', 'Cbt', 'Transactions'],

    endpoints: builder => ({

      getDashboard: builder.query({
        query: () => '/api/v1/dev/getAllMyDashboardParameters',
        providesTags: ['Dashboard']
      }),

      getMyMatchedJobs: builder.query({
        query: () => 'api/v1/dev/getAllMyMatchedJobs',
        providesTags: ['Dashboard']
      }),

      getAllMyCbtDetails: builder.query({
        query: () => 'api/v1/dev/getAllMyCbtDetails',
        providesTags: ['Cbt']
      }),

      getMyWorkHistory: builder.query({
        query: () => 'api/v1/dev/getMyWorkHistory',
        providesTags: ['Dashboard']
      }),

      getMyOverAllRating: builder.query({
        query: () => 'api/v1/dev/getMyOverAllRating',
        providesTags: ['Dashboard']
      }),

      acceptOffer: builder.mutation({
        query: post => ({
          url: `api/v1/dev/acceptOffer/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      rejectOffer: builder.mutation({
        query: post => ({
          url: `api/v1/dev/rejectOffer/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      getAllMyTransactions: builder.query({
        query: () => 'api/v1/dev/getAllMyTransactions',
        providesTags: ['Transactions']
      }),

      getAllBanks: builder.query({
        query: () => 'api/v1/all/getAllBanks',
        providesTags: ['Transactions']
      }),

      getAllQuestions: builder.query({
        query: () => 'api/v1/dev/getMyRandomizedQuestion',
        providesTags: ['Transactions']
      }),

      getCbtParams: builder.query({
        query: (id) => `api/v1/all/getCbtParamsRealname/${id}/stack`,
        providesTags: ['Transactions']
      }),

      getAllLevels: builder.query({
        query: () => 'api/v1/dev/getLevels',
        providesTags: ['Transactions']
      }),

      getAllStacks: builder.query({
        query: () => 'api/v1/dev/getStacks',
        providesTags: ['Transactions']
      }),

      addStack: builder.mutation({
        query: post => ({
          url: `api/v1/dev/chooseMyStacks/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      addLevel: builder.mutation({
        query: post => ({
          url: `api/v1/dev/chooseMyLevel/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      getLanguages: builder.query({
        query: (id) => `api/v1/dev/getLanguagesBasedOnStacks/${id}`,
        providesTags: ['Transactions']
      }),

      addLanguage: builder.mutation({
        query: post => ({
          url: `api/v1/dev/chooseMyLanguages/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      addLanguageExp: builder.mutation({
        query: post => ({
          url: `api/v1/dev/enterMyLanguageExperience/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      unChooseLanguage: builder.mutation({
        query: post => ({
          url: `api/v1/dev/UnchooseMyLanguages/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      getFrameworks: builder.query({
        query: (post) => `api/v1/dev/getFrameworksBasedOnLanguages/${post.lang1}/${post.lang2}/${post.lang3}/${post.lang4}/${post.lang5}/${post.lang6}/${post.lang7}/${post.lang8}`,
        providesTags: ['Transactions']
      }),

      addFramework: builder.mutation({
        query: post => ({
          url: `api/v1/dev/chooseMyFramework/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      addFrameworkExp: builder.mutation({
        query: post => ({
          url: `api/v1/dev/enterMyFrameworkExperience/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      unChooseFramework: builder.mutation({
        query: post => ({
          url: `api/v1/dev/UnchooseMyFramework/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      getSkills: builder.mutation({
        query: post => ({
          url: 'api/v1/dev/searchForMySkills',
          method: 'POST',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      addSkill: builder.mutation({
        query: post => ({
          url: `api/v1/dev/chooseMySkill/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      unChooseSkill: builder.mutation({
        query: post => ({
          url: `UnchooseMySkill/${post}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

      enterBasicInfo: builder.mutation({
        query: post => ({
          url: `api/v1/dev/enterBasicInfo`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),

       getAllMyMatchedJobs: builder.query({
        query: () => 'api/v1/dev/getAllMyMatchedJobs',
        providesTags: ['Transactions']
      }),
    })
  })
  
export const { useGetDashboardQuery, useGetMyMatchedJobsQuery, useGetAllMyCbtDetailsQuery, useGetMyWorkHistoryQuery, useGetMyOverAllRatingQuery, useAcceptOfferMutation, useRejectOfferMutation, useGetAllMyTransactionsQuery, useGetAllBanksQuery, useGetAllQuestionsQuery, useGetCbtParamsQuery, useGetAllLevelsQuery, useGetAllStacksQuery, useAddStackMutation, useAddLevelMutation, useGetLanguagesQuery, useAddLanguageMutation, useAddLanguageExpMutation, useUnChooseLanguageMutation, useGetFrameworksQuery, useAddFrameworkExpMutation, useUnChooseFrameworkMutation, useAddFrameworkMutation, useGetSkillsMutation, useAddSkillMutation, useUnChooseSkillMutation, useEnterBasicInfoMutation, useGetAllMyMatchedJobsQuery } = apiSlice
