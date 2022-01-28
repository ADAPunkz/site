import { Link } from 'gatsby';
import { Box, Button } from 'grommet';
import { FormPreviousLink } from 'grommet-icons';

import { useParams } from '@reach/router';

import AssetLoader from './AssetLoader';
import NftDetails from './NftDetails';
import NftDetailsSkeleton from './NftDetailsSkeleton';
import PunkzAttributes from './PunkzAttributes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PunkzPage = ({ path: _path }: { path: string }) => {
  const params = useParams();
  return (
    <Box direction="row-responsive" alignSelf="center" gap="small">
      <Link to="/explore">
        <Button icon={<FormPreviousLink />} hoverIndicator margin={{ right: 'small' }} />
      </Link>
      <AssetLoader endpoint={`/punkz/${params.id}`}>
        {(data, isFetched) => (isFetched ? <NftDetails metadata={data} path={`punkz/${data.edition}.png`} attributes={PunkzAttributes} /> : <NftDetailsSkeleton />)}
      </AssetLoader>
    </Box>
  );
};

export default PunkzPage;
