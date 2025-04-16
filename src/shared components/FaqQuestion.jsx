import React from 'react';

const FaqQuestion = ({question, answer}) => {
    return (
        <div className="collapse collapse-plus bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white border-none">
        <input type="radio" name="my-accordion-3" className='bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white' defaultChecked />
        <div className="collapse-title font-semibold bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white">{question}</div>
        <div className="collapse-content text-sm bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white">{answer}</div>
    </div>
    );
};

export default FaqQuestion;