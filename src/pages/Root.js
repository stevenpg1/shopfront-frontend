import React from 'react'
import { Outlet } from 'react-router-dom';

import BasketProvider from '../store/BasketProvider';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  return (
  <BasketProvider>
        <MainNavigation />
        <main>
        <Outlet />
        </main>
  </BasketProvider>
  )
}

export default RootLayout;