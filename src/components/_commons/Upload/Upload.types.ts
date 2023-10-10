export type UploadProps = {
  defaultImages: string[];
  multiple?: boolean;
  onFinish: (Files: string[]) => void;
  isMainImage?: boolean;
  setErrorMainImage?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UploadPreviewProps = {
  src: string;
  onRemove: (path: string) => void;
  isMainImage?: boolean;
};
