import { Box, ResponsiveContext, Spinner, ThemeContext, ThemeType } from 'grommet';
import { useContext } from 'react';

const NftDetailsSkeleton = () => {
  const theme: ThemeType = useContext(ThemeContext);
  const size = useContext(ResponsiveContext);
  return (
    <Box direction="row-responsive" gap="small">
      <Box direction="column" background="background-back" elevation="small">
        <Box width={theme.global.size.medium} height={theme.global.size.medium} />
        <Box height="xxsmall" />
      </Box>
      <Box width={size === 'small' ? '' : '420px'} direction="column" pad="small" gap="medium" justify="between" background="punkz-charcoal">
        <Box direction="row" fill="horizontal" justify="end">
          <Spinner color="white" />
        </Box>
      </Box>
    </Box>
  );
};

export default NftDetailsSkeleton;
