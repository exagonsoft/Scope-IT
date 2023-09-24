import '@styles/globals.css'
import Logo from '@public/assets/logo.svg'
import NavBar from '@components/NavBar'
import Provider from '@components/Provider'

export const metadata = {
    title: "Scope IT",
    description: "SCOPE-IT helps you to plan your projects accurately and manage your team efficiently.",
    icon: Logo
}

const layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <NavBar />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default layout
