import { Grid, Group, Stack, Text } from '@mantine/core';
import { useLoginPageStyle } from './LoginPage.styles';
import LoginForm from '@/components/Login/LoginForm';

const LoginPage: React.FC = () => {
  const { classes } = useLoginPageStyle();

  return (
    <Grid mih="100vh" className={classes.grid}>
      <Grid.Col span={12} md={5} lg={4} className={classes.colBrand}>
        <Group position="center" h="100%">
          <Stack align="center">
            <Text weight="bold" size={40} color="white">
              LOGO
            </Text>
            <Text color="gray.0" size="xl">
              Lorem ipsum dolor sit amet
            </Text>
          </Stack>
        </Group>
      </Grid.Col>
      <Grid.Col span={12} md={7} lg={8} className={classes.colForm}>
        <Group position="center" h="100%">
          <LoginForm />
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default LoginPage;
