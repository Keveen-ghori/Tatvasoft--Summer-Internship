import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)



    const handleLogin = (): void  => {
        setisLoggedIn(true)
    }
    const handleLogout = (): void => {
        setisLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn? 'Logged In' : 'Logged Out'}</div>
        </div>

    )
}