import { Suspense } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Outlet, useLocation } from 'react-router-dom';
import { HeroDetails } from '../../pages/HeroDetails/HeroDetails';
import { NavGoBack } from './HeroComponent.styled';

export const HeroesDetails = () => {
  const location = useLocation();

  return (
    <div className="heroDetails">
      <NavGoBack to={location.state?.from ?? '/' ?? '/hero'}>
        <BiArrowBack size="18" />
        Go Back
      </NavGoBack>
      <HeroDetails />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
