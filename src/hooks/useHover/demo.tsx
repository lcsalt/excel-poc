import { useHover } from '.';

function Demo() {
  const { hovered, ref } = useHover();
  return <div ref={ref}>{hovered ? 'I am hovered' : 'Put mouse over me please'}</div>;
}
