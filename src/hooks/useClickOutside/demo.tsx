import { useState } from 'react';
import { useClickOutside } from '.';
import { Paper } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <button onClick={() => setOpened(true)}>Open dropdown</button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
