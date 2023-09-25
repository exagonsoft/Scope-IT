import '@styles/globals.css'
import Logo from '@public/assets/logo.svg'
import NavBar from '@components/NavBar'
import Provider from '@components/Provider'
import SideBar from '@components/SideBar'
import { SessionProvider, getSession } from 'next-auth/react'
import MainContainner from '@containers/maincontainner'

export const metadata = {
    title: "Scope IT",
    description: "SCOPE-IT helps you to plan your projects accurately and manage your team efficiently.",
    icon: Logo
}

const layout = ({ children }) => {
    return (
        <html lang='en'>
            <body className=' overflow-hidden'>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app !p-0">
                        <NavBar />
                        <div className="blur-top"></div>
                        <div className="flex justify-center w-full h-[100vh]">
                            <MainContainner children={children}/>
                        </div>
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default layout
