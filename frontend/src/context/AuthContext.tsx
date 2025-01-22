"use client"


import { createContext, ReactNode, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type User = {
    username: string;
    password: string;
}

export type AuthContextType = {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}


export const AuthContext = createContext({} as AuthContextType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const login = async (username: string, password: string): Promise<void> => {
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/token`, { username, password }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
            localStorage.setItem('token', data.access_token);
            setUser(data);
            router.push('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const register = async (username: string, password: string): Promise<void> => {
        try {
            const { data } = await axios.post('/api/auth/register', { username, password });
            setUser(data);
            router.push('/');
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            setUser(null);
            delete axios.defaults.headers.common['Authorization'];
            router.push('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;