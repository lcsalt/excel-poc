import { RouterProvider } from 'react-router-dom';
// import useAuth from './hooks/useAuth/index.js';
import useError, { ErrorContextType } from './contexts/useError';
import useLoadingBar, { LoadingBarProgressContextType } from './contexts/useLoadingBar';
import router from './routes';
import LoadingBar from 'react-top-loading-bar';
import Alert from './components/common/Alert';
import { useEffect } from 'react';

function App() {
  // const { user } = useAuth();
  const { error, setError } = useError() as ErrorContextType;
  const { barProgress, setLoadingBarProgress } = useLoadingBar() as LoadingBarProgressContextType;

  return (
    <div>
      {/* {isLoading && <Spinner /> } */}
      {error && (
        <Alert
          customTitleStyles={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}
          customMessageStyles={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}
          type="error"
          title={error?.error || 'Error'}
          message={error.message}
          onDismiss={() => setError(null)}
        />
      )}
      <LoadingBar color={'#000'} height={3} progress={barProgress} onLoaderFinished={() => setLoadingBarProgress(0)} />

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
