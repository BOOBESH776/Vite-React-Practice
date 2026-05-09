

function plus(){
    const counter = document.getElementById('counter');
    counter.textContent = parseInt(counter.textContent) + 1;
}

function minus(){
    const counter = document.getElementById('counter');
    counter.textContent = parseInt(counter.textContent) - 1;
}

function reset(){
    const counter = document.getElementById('counter');
    counter.textContent = 0;
}

const A = () => {
    return (
        <div ClassName='counter-container'>
            <div>
                <h1>Counter</h1>
            </div>

            <span id = "counter" className='counter-value'>0</span>

            <div className='counter-btn'>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default A;