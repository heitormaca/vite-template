import { Modal } from '@mantine/core';
import { HeaderUserDetailsModalProps } from './HeaderUserDetails.types';
import { HeaderUserDetailsForm } from './components';

const HeaderUserDetailsModal: React.FC<HeaderUserDetailsModalProps> = ({
  user,
  ...props
}) => {
  return (
    <Modal title="Dados da conta" {...props}>
      <HeaderUserDetailsForm user={user} onClose={props.onClose} />
    </Modal>
  );
};
export default HeaderUserDetailsModal;
