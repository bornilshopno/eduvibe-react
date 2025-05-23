import React from 'react';
import { TiTick } from 'react-icons/ti';

const FeatureText = ({text}) => {
    return (
        <div>
            <p className='flex gap-2 items-center text-gray-700'>
            <TiTick /> {text}
        </p>
        </div>
    );
};

export default FeatureText;