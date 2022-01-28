import { Link } from 'gatsby';
import { Box, Button } from 'grommet';
import { FormPreviousLink } from 'grommet-icons';

import { useParams } from '@reach/router';

import { CollageNft, getCollageImageName } from '../utils';
import AssetLoader from './AssetLoader';
import CollageAttributes from './CollageAttributes';
import NftDetails from './NftDetails';
import NftDetailsSkeleton from './NftDetailsSkeleton';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CollagePage = ({ path: _path }: { path: string }) => {
  const params = useParams();
  return (
    <Box direction="row-responsive" alignSelf="center" gap="small">
      <Link to="/explore">
        <Button icon={<FormPreviousLink />} hoverIndicator margin={{ right: 'small' }} />
      </Link>
      <AssetLoader endpoint={`/collage/${params.id}`}>
        {(data, isFetched) =>
          isFetched ? (
            <NftDetails metadata={data} path={`collages/${getCollageImageName(data as CollageNft)}.gif`} attributes={CollageAttributes} fill="vertical" />
          ) : (
            <NftDetailsSkeleton />
          )
        }
      </AssetLoader>
    </Box>
  );
};

export default CollagePage;
