import React from 'react';
import { Link } from 'react-router-dom';

const SingaleCatagory = ({singleCatagory}) => {;
   const {id,name,logo,total} = singleCatagory;

  
    return (
        <div>
            <section className="py-6 sm:py-12  dark:text-gray-100 ">
                <div className="">
                    <h1></h1>
                   
                    <div className="">
                        <article className="flex flex-col  shadow-lg rounded-md">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className=" w-full h-72 bg-gray-500 rounded-md" src={logo}  />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"></a>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                   
                                   <h3 className=" py-2  text-lg font-semibold leading-snug">{name}</h3>
                                   <span className='py-2  text-lg font-semibold leading-snug'>Quations :{total}</span>
                                   </div>
                                <Link to={`/topic/${id}`}><button  className='px-8 py-3 font-semibold border bg-rose-500 hover:bg-rose-400 rounded dark:border-gray-100 text-gray-100 w-full'>Start Quiz</button> </Link>  
                               
                            </div>
                        </article>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingaleCatagory;