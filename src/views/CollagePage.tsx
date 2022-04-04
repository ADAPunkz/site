import { Link } from 'gatsby';
import { Box, Button } from 'grommet';
import { FormPreviousLink } from 'grommet-icons';

import { useParams } from '@reach/router';

import AssetLoader from '../components/AssetLoader';
import CollageAttributes from '../components/CollageAttributes';
import NftDetails from '../components/NftDetails';
import NftDetailsSkeleton from '../components/NftDetailsSkeleton';
import { CollageNft, getCollageImageName } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CollagePage = ({ path: _path }: { path: string }) => {
  const params = useParams();
  return (
    <Box direction="row-responsive" alignSelf="center" gap="small">
      <Link to="/mvp">
        <Button icon={<FormPreviousLink />} hoverIndicator margin={{ right: 'small' }} />
      </Link>
      <AssetLoader endpoint={`/collage/${params.id}`}>
        {(data, isFetched) =>
          isFetched ? <NftDetails metadata={data} path={`collages/${getCollageImageName(data as CollageNft)}.gif`} attributes={CollageAttributes} /> : <NftDetailsSkeleton />
        }
      </AssetLoader>
    </Box>
  );
};

export default CollagePage;
