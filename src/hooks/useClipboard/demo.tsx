import { Button } from '@mantine/core';
import { useClipboard } from '.';

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button color={clipboard.copied ? 'teal' : 'blue'} onClick={() => clipboard.copy('Hello, world!')}>
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}
