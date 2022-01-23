import { Box, ResponsiveContext, Spinner } from 'grommet';
import { useContext } from 'react';

const NftDetailsSkeleton = () => {
  const size = useContext(ResponsiveContext);
  const detailSize = size === 'small' ? '' : 'medium';

  return (
    <Box direction="row-responsive" background="punkz-charcoal">
      <Box width="medium"></Box>
      <Box width={detailSize} height={detailSize} direction="column" gap="small" pad="medium">
        <Box direction="row" fill="horizontal" justify="end">
          <Spinner color="terminal" />
        </Box>
      </Box>
    </Box>
  );
};

export default NftDetailsSkeleton;
