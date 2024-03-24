import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom';

import Loading from '../Component/Loading';
import { Navbar } from '../Component/Navbar';

export const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      {
        isPageLoading ? (
          <Loading />
        ) : (
          <section className='align-element p-20'>
            <Outlet />
          </section>
        )
      }
    </>
  )
}


