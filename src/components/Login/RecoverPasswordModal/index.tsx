import { Modal, Stack, Text } from '@mantine/core';
import { Props } from './RecoverPasswordModal.types';
import { RecoverPasswordForm } from './components';

const RecoverPasswordModal: React.FC<Props> = ({ email, ...props }) => {
  return (
    <Modal {...props} title="Recuperar senha" size="sm">
      <Stack spacing="xl">
        <Text>
          Informe o e-mail cadastrado para receber o link de recuperação de
          senha.
        </Text>

        <RecoverPasswordForm email={email} onFinish={props.onClose} />
      </Stack>
    </Modal>
  );
};

export default RecoverPasswordModal;
