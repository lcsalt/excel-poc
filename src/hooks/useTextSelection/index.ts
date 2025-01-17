import { useEffect, useState } from 'react';
import { useForceUpdate } from '../useForceUpdate';

export function useTextSelection(): Selection | null {
  const forceUpdate = useForceUpdate();
  const [selection, setSelection] = useState<Selection | null>(null);

  const handleSelectionChange = () => {
    setSelection(document.getSelection());
    forceUpdate();
  };

  useEffect(() => {
    setSelection(document.getSelection());
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  return selection;
}
