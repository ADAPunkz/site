import { Box, Text, Tip } from 'grommet';

const NftAttribute = ({ name, icon, value }: { name: string; icon: JSX.Element; value: string }) => (
  <Box direction="row" gap="small">
    <Tip content={name}>{icon}</Tip>
    <Text size="small">{value.replace('background', '')}</Text>
  </Box>
);

export default NftAttribute;
