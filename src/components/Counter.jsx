// import my hooks from react
import { useRef, useState } from 'react';

function Counter() {
    // create a ref variable and give it an initial value of 0
    const ref = useRef(0);
    // create a state variable and give that an initial value of 0
    // the state variable changing will cause this component to re-render
    const [divFive, setDivFive] = useState(0);

    function handleClick () {
        // update the current value of ref
        // notice that I can change this directly, which is different from stat
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
        if (ref.current % 5 === 0) setDivFive(ref.current/5);
    }

  return (
    <>
    <h2>Counter Example</h2>
    <button onClick = {handleClick}>Click me!</button>

    <p> ref count is {ref.current} </p>
    <p> div 5 count (which is state) is: {divFive} </p>
    </>
  )
}

export default Counter