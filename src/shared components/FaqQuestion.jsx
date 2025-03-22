import React from 'react';

const FaqQuestion = ({question, answer}) => {
    return (
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">{question}</div>
        <div className="collapse-content text-sm">{answer}</div>
    </div>
    );
};

export default FaqQuestion;