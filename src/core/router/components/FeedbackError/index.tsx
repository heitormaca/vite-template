import { useEffect, useState } from 'react';
import { ErrorData } from './FeedbackError.types';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Button, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { IconArrowNarrowLeft } from '@tabler/icons-react';

const FeedbackError: React.FC = () => {
  const [data, setData] = useState<ErrorData>();
  const error = useRouteError();

  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        setData({
          title: 'Página não encontrada',
          status: error.status,
          message: 'A página solicitada não existe, ou foi removida.',
        });
      }

      if (error.status === 401) {
        setData({
          title: 'Acesso não autorizado',
          status: error.status,
          message:
            'É necessário estar autenticado para acessar esta página, ou ter uma permissão.',
        });
      }

      if (error.status === 403) {
        setData({
          title: 'Acesso não permitido',
          status: error.status,
          message: 'É necessário ter uma permissão especifica para visualizar.',
        });
      }

      if (error.status === 503) {
        setData({
          title: 'Erro no sistema',
          status: error.status,
          message: 'Houve um erro na solicitação do serviço, tente novamente.',
        });
      }
    }
  }, [error]);

  return (
    <Group position="center" h="100vh">
      <Group>
        <Title order={1}>{data?.status}</Title>
        <Divider orientation="vertical" />
        <Stack spacing="xs" py="xs" align="start">
          <Title order={2}>{data?.title}</Title>
          <Text>{data?.message}</Text>
          <Button component={Link} to="/" leftIcon={<IconArrowNarrowLeft />}>
            Voltar ao início
          </Button>
        </Stack>
      </Group>
    </Group>
  );
};

export default FeedbackError;
