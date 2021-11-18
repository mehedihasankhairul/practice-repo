import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);


    const updateCountToFive = () => {
        let i = 0;
        while (i < 5) {
            // setCount(count + 1);
            setInterval(() => { setCount(count + 1); }, 1000);
            i++;

        }
    };


    return (
        <>
            <h1>Counter</h1>
            <button onClick={updateCountToFive}>{count}</button>
        </>
    );
};

export default Counter;