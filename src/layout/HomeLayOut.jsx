import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/home/header/Header';
import LatestNewa from '../components/home/LatestNewa';
import Navber from '../components/home/Navber';
import RightAside from '../components/home/homelayout/RightAside';
import LeftAside from '../components/home/homelayout/LeftAside';
import CategoriesNews from '../pages/CategoriesNews';

const HomeLayOut = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <section className="left_nav w-11/12 mx-auto my-2">
                <LatestNewa/>
                <nav  className='w-11/12 mx-auto my-2 '>
                <Navber/>
                </nav>
                </section>
               
                    <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
                    <aside className='col-span-3'>
                <LeftAside/>
               </aside>
              <section className='col-span-6'>
               
              <Outlet/>
              </section>
               <aside className='col-span-3'> <RightAside/> </aside>
                    </main>
                   
                    
                   
              
               
               
                <section className="right_nav">
                    
                </section>
            </main>
        </div>
    );
};

export default HomeLayOut;