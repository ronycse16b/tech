import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';
export const CatagoryContext = createContext([])

const Root = () => {
    const catagory = useLoaderData()
  
    return (
        <CatagoryContext.Provider value={catagory}>
        <div>
            
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    </CatagoryContext.Provider>
    );
};

export default Root;