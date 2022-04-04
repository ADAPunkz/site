import './src/styles/global.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import config from './gatsby-config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey, pageParam = 1 }) => {
        let url = `${config.siteMetadata.apiUrl}${queryKey[0]}`;

        if (queryKey[queryKey.length - 1] === 'paged') {
          url += `&page=${pageParam}&pageSize=50`;
        }

        const headers = {};
        const token = localStorage.getItem('wallet_token');

        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetch(url, {
          headers,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      },
      cacheTime: 300000,
      staleTime: 300000,
    },
  },
});

export const wrapRootElement = ({ element }) => <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>;
