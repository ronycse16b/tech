import React, { useContext } from 'react';
import { CatagoryContext } from '../Root/Root';
import SingaleCatagory from '../SingalCatagory/SingaleCatagory';


const Cetagory = () => {

    const catagory = useContext(CatagoryContext);

          const newc = catagory.data;
    return (
        <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 container p-6 mx-auto my-10'>
                    {
                        newc.map(singleCatagory => <SingaleCatagory key={singleCatagory.id} singleCatagory={singleCatagory}> </SingaleCatagory>)
                    }
        </div>
    );
};

export default Cetagory;