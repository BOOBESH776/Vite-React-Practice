import { useState } from 'react';

const A = () => {
    const [state, setState] = useState(0);

    const plus = () => setState((previousState) => { return previousState + 1;});
    const minus = () => setState((previousState) => { return previousState - 1;});
    const reset = () => setState(0);
    return (
        <div className='counter-container' >
            <div>
                <h1>Counter</h1>
            </div>

            <span id = "counter" className='counter-value'>{state}</span>

            <div className='counter-btn'>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default A;