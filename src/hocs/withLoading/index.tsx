type WithLoadingProps = {
  isLoading: boolean;
};

const withLoading =
  <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P & WithLoadingProps> =>
  ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...(props as P)} />;
  };

export default withLoading;
