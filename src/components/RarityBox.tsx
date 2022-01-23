import { Box, Button, Text } from 'grommet';
import { Ascending, Descending, Unsorted } from 'grommet-icons';
import { useEffect, useState } from 'react';

import { AttributeRarity } from '../utils';

enum Sort {
  Asc,
  Desc,
  Default,
}

const RarityBox = ({ title, attributes }: { title: string; attributes: AttributeRarity[] }) => {
  const [icon, setIcon] = useState(<Unsorted color="black" />);
  const [sort, setSort] = useState<Sort>();

  useEffect(() => {
    switch (sort) {
      case Sort.Asc:
        attributes.sort((a, b) => a.rarity - b.rarity);
        setIcon(<Ascending color="black" />);
        break;
      case Sort.Desc:
        attributes.sort((a, b) => b.rarity - a.rarity);
        setIcon(<Descending color="black" />);
        break;
      default:
        attributes.sort((a, b) => a.value.localeCompare(b.value));
        setIcon(<Unsorted color="black" />);
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
    <Box direction="column" width="medium" background="punkz-background-back" margin="medium">
      <Box pad="small" direction="row" align="center" justify="between" fill="horizontal" gap="small" background="punkz-background-front">
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
            <Text>{`${attribute.rarity}%`}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RarityBox;
