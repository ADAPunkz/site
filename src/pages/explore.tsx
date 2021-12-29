import { Box, Layer } from 'grommet';
import { useEffect, useState } from 'react';
import shallow from 'zustand/shallow';

import Layout from '../components/Layout';
import NftDetails from '../components/NftDetails';
import NftFilterPanel from '../components/NftFilterPanel';
import NftGrid from '../components/NftGrid';
import Sidebar from '../components/Sidebar';
import { useBus } from '../hooks';
import { useStore } from '../hooks';
import { EVENTS, NftFilterForm, NftType, toQueryString } from '../utils';

const InnerExplore = () => {
  const [payload, setPayload] = useStore((state) => [state.filterPayload, state.setFilterPayload], shallow);

  const [query, setQuery] = useState(toQueryString(payload));
  const [showFilterOverlay, setShowFilterOverlay] = useState(false);
  const [showDetailsOverlay, setShowDetailsOverlay] = useState(false);
  const [selectedNft, setSelectedNft] = useState<NftType>();

  const onChange = (nextPayload: NftFilterForm) => setPayload(nextPayload);

  useEffect(() => {
    setQuery(toQueryString(payload));
  }, [payload]);

  useBus(EVENTS.OPEN_FILTER_PANEL, () => {
    setShowFilterOverlay(true);
  });

  useBus(EVENTS.OPEN_DETAILS_PANEL, (event) => {
    setSelectedNft(event.item);
    setShowDetailsOverlay(true);
  });

  return (
    <>
      <Box direction="row" fill justify="end">
        <NftGrid query={query} />
      </Box>
      {showFilterOverlay && (
        <Layer animate modal full="vertical" position="right" onClickOutside={() => setShowFilterOverlay(false)}>
          <Sidebar fill close={() => setShowFilterOverlay(false)}>
            <NftFilterPanel payload={payload} onChange={onChange} />
          </Sidebar>
        </Layer>
      )}
      {showDetailsOverlay && (
        <Layer animate modal full position="right" onClickOutside={() => setShowDetailsOverlay(false)}>
          <Sidebar fill justify="center" close={() => setShowDetailsOverlay(false)}>
            <NftDetails metadata={selectedNft} />
          </Sidebar>
        </Layer>
      )}
    </>
  );
};

const Explore = () => (
  <Layout margin="none" hideFooter>
    <InnerExplore />
  </Layout>
);

export default Explore;
