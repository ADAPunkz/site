import { FC } from 'react';

import { CollageNft, NftDetailsTickerProps, getCollageImageName } from '../utils';
import CollageAttributes from './CollageAttributes';
import NftDetailsTicker from './NftDetailsTicker';

const CollageDetailsTicker: FC<NftDetailsTickerProps<CollageNft>> = ({ attributes = CollageAttributes, ...props }) => (
  <NftDetailsTicker
    title={props.title}
    nfts={props.nfts}
    background={props.background}
    attributes={attributes}
    ignoreConstraint={props.ignoreConstraint}
    indentTitle={props.indentTitle}
    fill={props.fill}
    pathSelector={(nft) => `collages/${getCollageImageName(nft)}.gif`}
  />
);

export default CollageDetailsTicker;
