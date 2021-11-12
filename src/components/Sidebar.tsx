import { Box, Button } from 'grommet';
import { Close } from 'grommet-icons';
import { FillType } from 'grommet/utils';

const Sidebar = ({
  children,
  close,
  fill = 'horizontal',
  justify = 'start',
}: {
  children: any;
  close: () => void;
  fill?: FillType;
  justify?: 'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly';
}) => (
  <Box width="medium" fill={fill} background="background" pad="small" overflow="auto">
    <Box direction="row" align="center" as="header" justify="end" margin="medium">
      <Button icon={<Close />} hoverIndicator onClick={close} />
    </Box>
    <Box align="center" justify={justify} fill={fill}>
      {children}
    </Box>
  </Box>
);

export default Sidebar;
