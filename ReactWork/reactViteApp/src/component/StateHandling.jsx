import React, { useState } from 'react';

function StateHandling() {
    const [count, setCount] = useState(20);
    function incrementCounterValue() {
        setCount(count + 2);
    }

    return (
        <div>
            <h2>Counter value ={count}</h2>
            <button onClick={incrementCounterValue}>Increment Counter</button>
            <button onClick={() => setCount(count - 2)}>Decrement Counter</button>
        </div>
    );
}

export default StateHandling;