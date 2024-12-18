import { useRef } from 'react';

function UncontrolledForm() {
    // useRef to get individual input values
    const nameInput = useRef('');
    const ageInput = useRef(0);
    const emailInput = useRef('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log({
            name: nameInput.current.value,
            age: ageInput.current.value,
            email: emailInput.current.value
        })
    }

  return (
    <>
    <h2>Uncontrolled Form Example</h2>
    <form onSubmit={handleSubmit}>
        <input type='text' ref={nameInput} placeholder="your name"/>
        <input type='number' ref={ageInput} placeholder="your age"/>
        <input type='text' ref={emailInput} placeholder="your email"/>
        <input type='submit' value='Submit Form'/>
    </form>
    <p>{nameInput.current ? <>{nameInput.current.value} is {ageInput.current.value}</> : <>no input yet</>}</p>
    </>
  )
}

export default UncontrolledForm