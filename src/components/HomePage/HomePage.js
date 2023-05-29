import { Appbar } from 'components/AppBar/Appbar';
import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="homePage">
      <Appbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
