import { Box } from 'grommet';
import { FC } from 'react';

import SiteHeading from './SiteHeading';

const RoadmapSection: FC<{ id: string; title: string; image: JSX.Element }> = ({ children, id, title, image }) => (
  <Box id={id} direction="row-responsive" height="small" margin="medium" pad="medium" justify="between" background="punkz-charcoal">
    <Box direction="column">
      <SiteHeading color="terminal" level="4" margin="none">
        {title}
      </SiteHeading>
      {children}
    </Box>
    <Box justify="center" align="center" width="small" pad="small">
      {image}
    </Box>
  </Box>
);

export default RoadmapSection;
