import React from 'react';
import { x } from './Quiz/Quiz';

const New = ({newop , quizCheck}) => {

    
    
   

    
    return (
    <section className="dark:bg-gray-800 dark:text-gray-100   rounded-sm ">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 ">
		
		<div className="space-y-4 flex items-center ">
		
			     
				<button id='radio' onClick={()=>quizCheck(newop)}  className=" py-4 ml-4 -mt-5 dark:text-gray-400  border-solid border-2 border-indigo-600 lg:w-1/4 md:w-full hover:bg-slate-300 p-4" > {newop}</button>
	
			
		</div>
	</div>
</section>
    );
};

export default New;