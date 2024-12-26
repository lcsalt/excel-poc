import React from 'react';

const withCentered =
  <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> =>
  (props) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };

export default withCentered;
