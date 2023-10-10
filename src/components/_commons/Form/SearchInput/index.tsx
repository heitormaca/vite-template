import { TextInput, useMantineTheme } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import { SearchInputProps } from './SearchInput.types';

const SearchInput: React.FC<SearchInputProps> = ({ form, ...props }) => {
  const theme = useMantineTheme();

  return (
    <TextInput
      placeholder="Pesquisar"
      rightSection={
        !form.values.search?.length ? (
          <IconSearch color={theme.colors.primary[9]} />
        ) : (
          <IconX
            color={theme.colors.secondary[6]}
            onClick={() => form.setValues({ search: '' })}
            style={{ cursor: 'pointer' }}
          />
        )
      }
      {...props}
      {...form.getInputProps('search')}
    />
  );
};

export default SearchInput;
