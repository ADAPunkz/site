import { Box, Button, Text } from 'grommet';
import { Ascending, Descending, Unsorted } from 'grommet-icons';
import { useEffect, useState } from 'react';

import { AttributeRarity } from '../utils';

enum Sort {
  Asc,
  Desc,
  Default,
}

const RarityBox = ({ title, attributes, constrain = false }: { title: string; attributes: AttributeRarity[]; constrain?: boolean }) => {
  const [icon, setIcon] = useState(<Unsorted color="terminal" />);
  const [sort, setSort] = useState<Sort>();

  useEffect(() => {
    switch (sort) {
      case Sort.Asc:
        attributes.sort((a, b) => (a.rarity || a.percent) - (b.rarity || b.percent));
        setIcon(<Ascending color="terminal" />);
        break;
      case Sort.Desc:
        attributes.sort((a, b) => (b.rarity || b.percent) - (a.rarity || a.percent));
        setIcon(<Descending color="terminal" />);
        break;
      default:
        attributes.sort((a, b) => a.value.localeCompare(b.value));
        setIcon(<Unsorted color="terminal" />);
    }
  }, [attributes, sort]);

  const onSort = () => {
    switch (sort) {
      case Sort.Asc:
        setSort(Sort.Desc);
        break;
      case Sort.Desc:
        setSort(Sort.Default);
        break;
      default:
        setSort(Sort.Asc);
    }
  };

  return (
    <Box direction="column" width={constrain ? 'medium' : ''} fill={constrain ? false : 'horizontal'} background="background-front">
      <Box pad="small" direction="row" align="center" justify="between" fill="horizontal" gap="small" background="punkz-charcoal">
        <Text weight="bold">{title}</Text>
        <Box direction="row">
          <Text weight="bold" margin={{ right: 'small' }}>
            %
          </Text>
          <Button icon={icon} plain onClick={onSort} />
        </Box>
      </Box>
      <Box pad="small">
        {attributes.map((attribute) => (
          <Box key={attribute.value} direction="row" justify="between" margin="xsmall">
            <Text>{attribute.value}</Text>
            <Text>{`${attribute.rarity || attribute.percent}%`}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RarityBox;
