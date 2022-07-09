import { useState } from "react";

function InitialCount() {
    console.log('1');
    return 4
}

function Counter() {
    const [count, countSet] = useState(() => InitialCount());

    function countDecrement() {
        countSet((preCount) => preCount - 1);

    }

    function countIncrement() {
        countSet((preCount) => preCount + 1);
    }

    return (
        <div>
            <div>Counter: </div>
            <button onClick={countDecrement}>-</button>
            <span>{ count }</span>
            <button onClick={countIncrement}>+</button>
        </div>
    )

}

export default Counter;
export {};