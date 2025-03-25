import { useState } from 'react'
import useAuth from '../utils/useAuth'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<any>(null)
    const [isLogged, setIsLogged] = useState<boolean>(false)

    const { login } = useAuth()

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
            await login({ email, password })
            setError(null)
            setIsLogged(true)
        } catch (err) {
            setError(err)
        }
    }

    return (
        <div className='login'>
            <form action="">
                <input
                    type="text"
                    placeholder='enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder='enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>login</button>
                {error && <p className='error'> error: {error.message}</p>}
                {isLogged && <p className='success'> logged in successfully</p>}
            </form>
            <p>don't have an account? <Link to='/signup'>sign up now </Link></p>
        </div>
    )
}

export default Login