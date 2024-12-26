import { Button, Text, Group } from '@mantine/core';
import { useForceUpdate } from '@mantine/hooks';
import { uuid } from '../../utils/utils';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{uuid()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
