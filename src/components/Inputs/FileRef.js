// Create a custom hook for file reference
import { useRef } from 'react';

export const useFileRef = () => {
  const fileRef = useRef(null);
  return fileRef;
};
