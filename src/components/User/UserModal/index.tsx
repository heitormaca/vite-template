import { Modal, Stack, Text } from '@mantine/core';
import { Props } from './UserModa.types';
import { UserForm } from './components';

const UserModal: React.FC<Props> = (props) => {
  const title = `${props.user ? 'Editar' : 'Cadastrar'} usuário`;

  return (
    <Modal {...props} title={title}>
      <Stack>
        <Text>
          Preencha os campos para {props.user ? 'editar' : 'cadastrar'} os dados
          do usuário.
        </Text>

        <UserForm user={props.user} onClose={props.onClose} />
      </Stack>
    </Modal>
  );
};

export default UserModal;
