import { useState, useCallback } from 'react';
import { Button } from '@mantine/core';
import { useEventListener } from '.';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);
  return <Button ref={ref}>Button clicks: {count}</Button>;
}
