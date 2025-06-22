import { Outlet } from "react-router" 
import Header from './header.jsx'
import Aside from './aside.jsx'

export default function Layout () {
    return (
        <>
            <Header />
            <Aside />
            <main>
                <Outlet />
            </main>
        </>
    )
}