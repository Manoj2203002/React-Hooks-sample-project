import React, { Suspense } from 'react';

const Lazy = React.lazy(() => import('SuspenseComponent/lazy'));

const LazyLoading = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Lazy />
      </Suspense>
    </div>
  );
};

export default LazyLoading;
