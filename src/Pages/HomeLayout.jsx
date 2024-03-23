import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom';
// import { Navbar } from '../Component/Navbar.tsx';
import Loading from '../Component/Loading.tsx';
import { Navbar } from '../Component/Navbar.tsx';

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


