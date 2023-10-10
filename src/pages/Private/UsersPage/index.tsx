import { Stack } from '@mantine/core';
import UserList from '@/components/User/UserList';

const UserPage: React.FC = () => {
  return (
    <>
      <Stack spacing="xl">
        <UserList />
      </Stack>
    </>
  );
};

export default UserPage;
