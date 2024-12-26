import { useFullscreen } from '.';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </button>
  );
}
