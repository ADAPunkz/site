import { Link } from 'gatsby';
import { Box, Button } from 'grommet';
import { FormPreviousLink } from 'grommet-icons';
import { useQuery } from 'react-query';

import { useParams } from '@reach/router';

import { PunkzNft } from '../utils';
import NftDetails from './NftDetails';
import NftDetailsSkeleton from './NftDetailsSkeleton';
import PunkzAttributes from './PunkzAttributes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NftDetailsLoader = ({ path: _path }: { path: string }) => {
  const params = useParams();
  const { data, isFetched } = useQuery<PunkzNft>(`/punkz/${params.id}`);

  return (
    <Box direction="row-responsive" alignSelf="center" gap="small">
      <Link to="/explore">
        <Button icon={<FormPreviousLink />} hoverIndicator margin={{ right: 'small' }} />
      </Link>
      {isFetched ? <NftDetails metadata={data} path="punkz" attributes={PunkzAttributes} /> : <NftDetailsSkeleton />}
    </Box>
  );
};

export default NftDetailsLoader;
