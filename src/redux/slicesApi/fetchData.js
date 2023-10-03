import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nftApi = createApi({
  reducerPath: "nft",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jsonbin.io/v3/b/" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "651bf7e212a5d37659869222",
    }),
    getArtists: builder.query({
      query: () => "651bf7f712a5d3765986922d",
    }),
    getNfts: builder.query({
      query: () => "651bf82a12a5d37659869241",
    })
  }),
});


export const {useGetCategoriesQuery, useGetArtistsQuery, useGetNftsQuery} = nftApi;