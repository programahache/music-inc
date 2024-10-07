export default function Layout({ children }) {
    return (
        <>
            <header className="flex justify-between items-center p-4 bg-neutral-800">
                <a href="/" className="font-bold text-2xl">Music Inc</a>
                <nav className="flex gap-3 px-2 ">
                    <a href="/register">Crear una cuenta</a>
                    <a href="/login" className="font-bold text-orange-300">Iniciar Session</a>

                </nav>
            </header>
            {children}
            {/* <footer className="p-4 bg-neutral-800 absolute bottom-0 w-full ">
                <p className="text-center ">Harold Palacios - 2024</p> 
            </footer> */}
        </>
    )
}