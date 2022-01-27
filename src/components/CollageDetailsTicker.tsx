import { FC } from 'react';

import { CollageNft } from '../utils';
import CollageAttributes from './CollageAttributes';
import NftDetailsTicker from './NftDetailsTicker';

const CollageDetailsTicker: FC<{ title: string; nfts: CollageNft[] }> = ({ title, nfts }) => (
  <NftDetailsTicker title={title} nfts={nfts} attributes={CollageAttributes} path="collage" />
);

export default CollageDetailsTicker;
