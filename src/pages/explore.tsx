import { Box, Layer, ResponsiveContext } from 'grommet';
import { useContext, useEffect, useState } from 'react';
import shallow from 'zustand/shallow';

import Layout from '../components/Layout';
import NftDetails from '../components/NftDetails';
import NftFilterPanel from '../components/NftFilterPanel';
import NftGrid from '../components/NftGrid';
import Sidebar from '../components/Sidebar';
import { useBus } from '../hooks';
import { useStore } from '../hooks/store';
import { EVENTS, NftFilterForm, NftType, toQueryString } from '../utils';

const InnerExplore = () => {
  const [payload, setPayload] = useStore((state) => [state.filterPayload, state.setFilterPayload], shallow);

  const [query, setQuery] = useState(toQueryString(payload));
  const [showFilterOverlay, setShowFilterOverlay] = useState(false);
  const [showDetailsOverlay, setShowDetailsOverlay] = useState(false);
  const [selectedNft, setSelectedNft] = useState<NftType>();

  const size = useContext(ResponsiveContext);

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
        <NftGrid query={query} constrain={size !== 'small'} />
        {size !== 'small' && <NftFilterPanel payload={payload} background="white" onChange={onChange} />}
      </Box>
      {showFilterOverlay && (
        <Layer animate modal full position="right" onClickOutside={() => setShowFilterOverlay(false)}>
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
  <Layout background="background-back" margin="none" hideFooter>
    <InnerExplore />
  </Layout>
);

export default Explore;
