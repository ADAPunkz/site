import { Link } from 'gatsby';
import { Box, Button, Spinner } from 'grommet';
import { FormPreviousLink } from 'grommet-icons';
import { useQuery } from 'react-query';

import { useParams } from '@reach/router';

import { NftType } from '../utils';
import NftDetails from './NftDetails';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NftDetailsLoader = ({ path: _path }: { path: string }) => {
  const params = useParams();
  const { data, isFetched } = useQuery<NftType>(`/punkz/${params.id}`);

  return (
    <Box direction="row-responsive" gap="small">
      <Link to="/explore">
        <Button icon={<FormPreviousLink />} hoverIndicator margin={{ right: 'small' }} />
      </Link>
      {isFetched ? <NftDetails metadata={data} /> : <Spinner color="brand" />}
    </Box>
  );
};

export default NftDetailsLoader;
