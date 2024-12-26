import { useDidUpdate } from '@mantine/hooks';

function Demo() {
  const dependency1 = true;
  const dependency2 = false;
  useDidUpdate(() => console.log("Won't be called when mounted"), [dependency1, dependency2]);
}
