import { CarLoader } from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<CarLoader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
