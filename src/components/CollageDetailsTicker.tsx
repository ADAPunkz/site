import { DirectionType, FillType } from 'grommet/utils';
import { FC } from 'react';

import { CollageNft, getCollageImageName } from '../utils';
import CollageAttributes from './CollageAttributes';
import NftDetailsTicker from './NftDetailsTicker';

const CollageDetailsTicker: FC<{
  title: string;
  nfts: CollageNft[];
  ignoreConstraint?: boolean;
  background?: string;
  direction?: DirectionType;
  fill?: FillType;
  indentTitle?: boolean;
}> = ({ title, nfts, ignoreConstraint, background, fill, direction, indentTitle }) => (
  <NftDetailsTicker
    title={title}
    nfts={nfts}
    background={background}
    direction={direction}
    attributes={CollageAttributes}
    ignoreConstraint={ignoreConstraint}
    indentTitle={indentTitle}
    fill={fill}
    pathSelector={(nft) => `collages/${getCollageImageName(nft as CollageNft)}.gif`}
  />
);

export default CollageDetailsTicker;
