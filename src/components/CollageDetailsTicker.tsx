import { FC } from 'react';

import { CollageNft } from '../utils';
import CollageAttributes from './CollageAttributes';
import NftDetailsTicker from './NftDetailsTicker';

const CollageDetailsTicker: FC<{ title: string; nfts: CollageNft[] }> = ({ title, nfts }) => (
  <NftDetailsTicker
    title={title}
    nfts={nfts}
    attributes={CollageAttributes}
    pathSelector={(nft) => {
      const collage = nft as CollageNft;
      return `collages/${collage.type.value.toLowerCase().replace(' ', '_')}-${collage.tier.value.toLowerCase().replace(' ', '_')}.gif`;
    }}
  />
);

export default CollageDetailsTicker;
