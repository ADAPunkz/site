/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Grid, InfiniteScroll, Spinner } from 'grommet';
import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';

import { apiUrl } from '../config';
import { dispatch } from '../hooks';
import { EVENTS, NftApiResponse, NftType } from '../utils';
import NftCard from './NftCard';
import SiteHeading from './SiteHeading';

const IndicateHover = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const NftGrid = ({ query }: { query: string }) => {
  const { data, fetchNextPage, isFetchingNextPage, isRefetching, refetch } = useInfiniteQuery<NftApiResponse>(
    ['punkz', 'paged'],
    async ({ pageParam = 1 }) => {
      const response = await fetch(`${apiUrl}/punkz?page=${pageParam}&pageSize=30&${query}`);

      if (!response.ok) {
        throw new Error('Response was not OK');
      }

      return response.json();
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    },
  );

  useEffect(() => {
    refetch();
  }, [query, refetch]);

  const count = data?.pages?.length || 0;
  let items: NftType[] = [];

  for (let i = 0; i < count; i++) {
    items = [...items, ...data.pages[i].results];
  }

  if (!data || (isRefetching && !isFetchingNextPage)) {
    return (
      <Box fill="horizontal" justify="center" align="center">
        <Spinner color="white" size="large" />
      </Box>
    );
  }

  return (
    <>
      {items.length === 0 ? (
        <Box fill="horizontal" margin="medium" justify="center" align="center">
          <Box direction="column" justify="center" align="center" margin="large">
            <StaticImage src="../images/home.png" alt="ADAPunkz Home" width={300} placeholder="none" loading="eager" objectFit="contain" />
            <SiteHeading level="4" textAlign="center">
              No Results :(
            </SiteHeading>
          </Box>
        </Box>
      ) : (
        <Grid fill="horizontal" columns="small" gap="medium" margin="medium" style={{ height: 'fit-content' }}>
          <InfiniteScroll items={items} onMore={fetchNextPage} step={25}>
            {(item: NftType) => (
              <Link key={item.edition} to={`/punk/${item.edition}`} style={{ display: 'flex', flexDirection: 'row', textDecoration: 'none', justifyContent: 'center' }}>
                <NftCard metadata={item} />
              </Link>
            )}
          </InfiniteScroll>
        </Grid>
      )}
    </>
  );
};

export default NftGrid;
