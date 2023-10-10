import { UpdatePasswordForm } from '@/components/Login';
import { Grid, Group, Loader, Text } from '@mantine/core';
import { useLoaderData } from 'react-router-dom';
import { useLoginPageStyle } from '../LoginPage/LoginPage.styles';
import { useValidateCode } from '@/core/domains/users/user.hooks';

type Props = {
  codeId: string;
};

export async function loader(params: Props) {
  return { params };
}

const ResetPasswordPage: React.FC = () => {
  const { classes } = useLoginPageStyle();

  const result = useLoaderData() as any;

  const code = result.params.params.codeId;

  const { data, isLoading } = useValidateCode(code);

  console.log(data);

  return (
    <Grid mih="100vh" className={classes.grid}>
      <Grid.Col span={12} className={classes.colForm}>
        <Group position="center" h="100%">
          {!isLoading && <UpdatePasswordForm codeId={code} />}
          {isLoading && (
            <Group spacing="sm">
              <Text>Carregando</Text>
              <Loader size="sm" />
            </Group>
          )}
        </Group>
      </Grid.Col>
    </Grid>
  );
};
export default ResetPasswordPage;
