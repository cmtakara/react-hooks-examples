import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

function DarkMode() {
    const [theme, setTheme] = useState('dark');
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <ThemeContext.Provider value={theme}>
            <h1>This is the DarkMode component</h1>
            <CurrentUserContext.Provider
                value={{
                    currentUser,
                    setCurrentUser
                }}
            >
                <WelcomePanel />
            </CurrentUserContext.Provider>
            {/* <Form /> */}

            <label>
                <input
                    type='checkbox'
                    checked={theme === 'dark'}
                    onChange={(e) => {
                        setTheme(e.target.checked ? 'dark' : 'light')
                    }}
                />
                use dark mode
            </label>


        </ThemeContext.Provider>
    )
}


// everything below here should go its own file

function WelcomePanel({ children }) {
    const { currentUser } = useContext(CurrentUserContext);
    console.log(currentUser)
    return (
        <Panel title="Welcome">
            {currentUser !== null ? <Greeting /> : <LoginForm />}
        </Panel>
    )
}

function Greeting() {
    const { currentUser } = useContext(CurrentUserContext);
    return <p>You logged in as {currentUser.name}</p>
}

function LoginForm() {
    const { setCurrentUser } = useContext(CurrentUserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const canLogin = firstName !== '' && lastName !== '';
    console.log(canLogin)

    return (
        <>
            <label>
                First name: {" "}
                <input
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Last name: {" "}
                <input
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <Button
            disabled = {!canLogin}
            onClick = {() => {
                setCurrentUser({
                    name: firstName + ' ' + lastName
                })
            }}
        >
            Log in
        </Button>
            {!canLogin && <i>Fill in both fields</i>}
        </>
    )
}

function Form() {
    return (
        <Panel title="welcome">
            <Button>Sign Up</Button>
            <Button>Log in</Button>
        </Panel>
    )
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = 'panel panel-' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ disabled, onClick, children }) {
    const theme = useContext(ThemeContext);
    const className = "button button-" + theme;
    return <button disabled={disabled} className={className} onClick={onClick}>{children}</button>
}

export default DarkMode