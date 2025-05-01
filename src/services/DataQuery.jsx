import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const DataApi = createApi({
  reducerPath: "data",
  baseQuery: fetchBaseQuery({ baseUrl: "https://global-warming.org/api/" }),
  endpoints: (builder) => ({
    getTemp: builder.query({
      query: () => "temperature-api",
    }),
    getNO: builder.query({
      query: () => "nitrous-oxide-api",
    }),
    getCO: builder.query({
      query: () => "co2-api",
    }),
    getMet: builder.query({
      query: () => "methane-api",
    }),
    getIce: builder.query({
      query: () => "arctic-api",
    }),
  }),
});

export const {
  useGetTempQuery,
  useGetCOQuery,
  useGetIceQuery,
  useGetMetQuery,
  useGetNOQuery,
} = DataApi;
