import { Box, ResponsiveContext } from 'grommet';
import { FC, useContext } from 'react';

import SiteHeading from './SiteHeading';

const RoadmapSection: FC<{ id: string; title: string; image: JSX.Element }> = ({ children, id, title, image }) => {
  const size = useContext(ResponsiveContext);
  const constrainedSize = size === 'small' ? '' : 'small';
  return (
    <Box id={id} direction="row-responsive" height={constrainedSize} margin="medium" pad="medium" justify="between" background="punkz-charcoal">
      <Box direction="column">
        <SiteHeading color="terminal" level="4" margin="none">
          {title}
        </SiteHeading>
        {children}
      </Box>
      <Box justify="center" align="center" width={constrainedSize} pad="small">
        {image}
      </Box>
    </Box>
  );
};

export default RoadmapSection;
