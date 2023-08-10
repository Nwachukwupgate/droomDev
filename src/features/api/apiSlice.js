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
    tagTypes: ['Dashboard', 'Cbt'],

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
          url: `api/v1/dev/acceptOffer/${post.id}`,
          method: 'PUT',
          body: post
        }),
        invalidatesTags: ['Dashboard']
      }),
    })
  })
  
export const { useGetDashboardQuery, useGetMyMatchedJobsQuery, useGetAllMyCbtDetailsQuery, useGetMyWorkHistoryQuery, useGetMyOverAllRatingQuery, useAcceptOfferMutation } = apiSlice