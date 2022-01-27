import { FC } from 'react';

import { PunkzNft } from '../utils';
import NftDetailsTicker from './NftDetailsTicker';
import PunkzAttributes from './PunkzAttributes';

const CollageDetailsTicker: FC<{ title: string; nfts: PunkzNft[] }> = ({ title, nfts }) => <NftDetailsTicker title={title} nfts={nfts} attributes={PunkzAttributes} path="punkz" />;

export default CollageDetailsTicker;
