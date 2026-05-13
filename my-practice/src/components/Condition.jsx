
import { useState } from 'react';

function Condition() {

    const [State, setState] = useState(0);
    function Increment(){
        setState((prev) => prev + 1);
    }

    
    return (
        <>
            <h1>Condition Render</h1>

            <div>
                <button onClick={Increment}>Click Me - {State}</button>
                {State >=10 ? <p>You Clicked {State} Times.</p> : <p>You Clicked {State} Times. Please Click More Than {10 - State} Times.</p>}
            </div>
        </>
    );
}

export default Condition;