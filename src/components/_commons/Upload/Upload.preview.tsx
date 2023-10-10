import { ActionIcon, Box, Image } from '@mantine/core';
import { UploadPreviewProps } from './Upload.types';
import { IconTrash } from '@tabler/icons-react';

const Preview: React.FC<UploadPreviewProps> = ({
  src,
  onRemove,
  isMainImage,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        padding: 16,
        backgroundColor: 'white',
      }}
    >
      <ActionIcon
        sx={{
          position: 'absolute',
          zIndex: 999,
          right: 12,
        }}
        variant="filled"
        color="red"
        onClick={() => onRemove(src)}
      >
        <IconTrash />
      </ActionIcon>
      <Image
        src={src}
        sx={{
          '& img': {
            aspectRatio: '1 / 1',
            height: isMainImage ? '334px !important' : '80px !important',
          },
        }}
      />
    </Box>
  );
};
export default Preview;
