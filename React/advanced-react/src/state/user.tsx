import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = (props: AuthUser) => {
    const [User, setUser] = useState<AuthUser | null>(null)

    const handleLogin = (): void =>{
        setUser({
            name: 'Kevin',
            email: '123@gmail.com',
        })
    }

    const handleLogout = (): void => {
        setUser(null)
    }

    return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h3>{User?.name}</h3>
        <h3>{User?.email}</h3>
    </div>
    )
}