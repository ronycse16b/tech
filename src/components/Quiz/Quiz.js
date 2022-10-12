import React, { createContext, useState } from 'react';
import New from '../New';
import {  EyeIcon  } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Quiz = ({ topic }) => {


 
const { question, options,correctAnswer } = topic;

const quizCheck =(x)=>{

    
    if(x === correctAnswer){
        toast.success("Conratulation Your Ans is Currect",{
            position: toast.POSITION.TOP_CENTER
        });
    }else{
        toast.error("Oh! Your Ans wan't Currect",{
            position: toast.POSITION.TOP_CENTER
        });
      
    }
    
 }
   const notify = () =>{
    toast.info(`Correct Answer : ${correctAnswer}`, {
        position: toast.POSITION.TOP_CENTER
    });

   }



    return (
     <section>
        
        
           <div className='container flex flex-col justify-center px-4 py-8 mx-auto md:p-8  border-solid border-2 border-indigo-600 mt-5'>
            
            <div className='flex justify-end mb-2'>
            <EyeIcon onClick={ notify} className="h-6 w-6 text-blue-500  cursor-pointer " />
            </div>
          
               <label className='text-cyan-800 py-5 p-5 text-2xl font-bold' > Quetion : {question.slice(3,-4)} </label><br />
             


           {
               options.map(newop=> <New quizCheck={quizCheck}   newop={newop}></New>)
               
           }
           
           < ToastContainer  />

       </div>
     </section>
        
    );
};

export default Quiz;
