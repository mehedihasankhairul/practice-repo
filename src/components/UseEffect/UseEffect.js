import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [user, setUser] = useState(null);
    console.log(user);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users'
        ).then(res => res.json()
        ).then(result => setUser(result));
    }, []);
    return (
        <div>

        </div>
    );
};

export default UseEffect;