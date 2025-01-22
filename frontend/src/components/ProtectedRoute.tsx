'use client'

import { AuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { ReactNode, useContext, useEffect } from "react"


const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const router = useRouter()
    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (!user) {
            router.push('/login')
        }
    }, [user, router])
    return user ? children : null
}

export default ProtectedRoute