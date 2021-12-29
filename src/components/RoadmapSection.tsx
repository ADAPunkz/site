import { Box, Image } from 'grommet';
import { FC } from 'react';

import SiteHeading from './SiteHeading';

const RoadmapSection: FC<{ id: string; title: string; image: string }> = ({ children, id, title, image }) => (
  <Box id={id} direction="row-responsive" margin="medium" pad="medium" elevation="small" justify="between" background="punkz-charcoal">
    <Box direction="column">
      <SiteHeading color="terminal" level="4" margin="none">
        {title}
      </SiteHeading>
      {children}
    </Box>
    <Box justify="center" align="center" pad="small">
      <Image src={image} alt={image} width={100} placeholder="none" loading="lazy" />
    </Box>
  </Box>
);

export default RoadmapSection;
