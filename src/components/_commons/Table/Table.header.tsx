import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { TableHeaderProps } from './Table.types';

const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  description,
  btnName,
  onClick,
}) => {
  return (
    <Stack spacing="xl" mb="xl">
      <Group position="apart">
        <Stack spacing={1}>
          <Title order={3} color="primary">
            {title}
          </Title>
          <Text>{description}</Text>
        </Stack>
        {!!btnName?.length && (
          <Button onClick={onClick} leftIcon={<IconPlus />}>
            {btnName}
          </Button>
        )}
      </Group>
    </Stack>
  );
};

export default TableHeader;
