import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {id} = useParams()
    return (
        <div className='component-bg'>
            {id}
        </div>
    );
};

export default Details;