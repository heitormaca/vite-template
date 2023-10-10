import { useEffect, useState } from 'react';
import { UploadProps } from './Upload.types';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useUpload } from '@/core/domains/files/file.hooks';
import { MAX_FILE_SIZE, MAX_PREVIEW_COLS } from './Upload.constants';
import showNotificationError from '@/core/utils/notification/showNotificationError';
import { Box, Image, SimpleGrid } from '@mantine/core';
import Preview from './Upload.preview';

const Upload: React.FC<UploadProps> = ({
  defaultImages,
  isMainImage = false,
  multiple = false,
  onFinish,
  setErrorMainImage,
}) => {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const upload = useUpload();
  const previewCols = defaultImages.length > 0 ? defaultImages.length : 1;

  async function handleUpload() {
    const formData = new FormData();

    files.forEach((file) => formData.append('files', file));

    const { items } = await upload.mutateAsync(formData);
    const imagePaths = items.map((item) => item.filePath);

    setPreviewImages(imagePaths);
    onFinish(imagePaths);
  }

  function handleRemovePreview(src: string) {
    const images = previewImages.map((previewSrc) =>
      previewSrc === src ? '' : src
    );

    onFinish(images);
    setPreviewImages(images);
  }

  useEffect(() => {
    if (defaultImages.filter((item) => !!item).length > 0) {
      setPreviewImages(defaultImages);
    }
  }, [defaultImages]);

  useEffect(() => {
    if (files.length > 0) handleUpload();
  }, [files]);

  return (
    <Box h="100%">
      {!previewImages.length ? (
        <Dropzone
          h="100%"
          accept={IMAGE_MIME_TYPE}
          maxSize={MAX_FILE_SIZE}
          multiple={multiple}
          onDrop={(file) => {
            setFiles(file), setErrorMainImage && setErrorMainImage(false);
          }}
          onReject={(error) =>
            showNotificationError(
              error,
              'Upload de imagem',
              'A imagem informada não é válida.'
            )
          }
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
          }}
          loading={upload.isLoading}
        >
          <Box
            h={!isMainImage ? 80 : undefined}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {!upload.isLoading && (
              <Image
                src="/images/tag.png"
                style={{ display: 'flex', alignItems: 'center' }}
              />
            )}
          </Box>
        </Dropzone>
      ) : (
        <SimpleGrid
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
          cols={multiple ? MAX_PREVIEW_COLS : previewCols}
        >
          {previewImages.map((src) =>
            src !== '' ? (
              <Preview
                isMainImage={isMainImage}
                key={src}
                src={src}
                onRemove={handleRemovePreview}
              />
            ) : (
              <Dropzone
                key={src}
                h="100%"
                accept={IMAGE_MIME_TYPE}
                maxSize={MAX_FILE_SIZE}
                multiple={multiple}
                onDrop={(file) => {
                  setFiles(file), setErrorMainImage && setErrorMainImage(false);
                }}
                onReject={(error) =>
                  showNotificationError(
                    error,
                    'Upload de imagem',
                    'A imagem informada não é válida.'
                  )
                }
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: 'none',
                }}
                loading={upload.isLoading}
              >
                <Box
                  h={!isMainImage ? 80 : undefined}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {!upload.isLoading && (
                    <Image
                      src="/images/tag.png"
                      style={{ display: 'flex', alignItems: 'center' }}
                    />
                  )}
                </Box>
              </Dropzone>
            )
          )}
        </SimpleGrid>
      )}
    </Box>
  );
};
export default Upload;
