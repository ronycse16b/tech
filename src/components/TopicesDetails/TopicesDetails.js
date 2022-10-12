import React from 'react';
import { useLoaderData} from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicesDetails = () => {
    const details = useLoaderData();
    const NewDetails = details.data;
    
    return (
        <div>
            <h1 className='text-2xl font-bold text-center'> Quiz Topic : {NewDetails.name} </h1>
            
            {
                NewDetails.questions

                .map(topic=> <Quiz key={topic.id} topic={topic}></Quiz> )
            },
          
        </div>
    );
};

export default TopicesDetails;