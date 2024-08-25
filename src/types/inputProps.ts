export interface FormikInputProps {
    name: string;
    type?: string;
    placeholder: string;
    label: string;
    className?: string;
    disabled?: boolean;
    setTotal?: (val: string | number) => void;
  }