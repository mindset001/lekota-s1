import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {BASE_URL, paths} from '../config/index';

const userProfileApi = createApi({
    reducerPath: 'userProfileApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    
})