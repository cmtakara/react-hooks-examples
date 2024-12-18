import { useState } from 'react'

function ControlledForm() {
    // you set up your state to have one variable that holds all of
    // your form state in one place
    const [form, setForm] = useState({
        name: '',
        email: '',
        age: 0,
    })

    const handleChange = (evt) => {
        setForm({ ...form, [evt.target.name]:evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(form);
        // this is where you would have your functionality to post or put 
        // to your backend, sending your form object as the body
    }

    return (
        <>
            <h2>Controlled Form Example</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    placeholder='Your Name'
                    onChange={handleChange}
                />
                <input
                    type='email'
                    name='email'
                    value={form.email}
                    placeholder='Your Email Address'
                    onChange={handleChange}
                />
                <input
                    type='number'
                    name='age'
                    value={form.age}
                    placeholder='Your Age'
                    onChange={handleChange}
                />
                <input type='submit' value='Submit Form'/>
            </form>
            <p>{form.name ? <>{form.name} is {form.age} </> : <>no name input yet </>}</p>
        </>
    )
}

export default ControlledForm