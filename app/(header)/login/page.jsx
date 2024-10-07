'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Login() {
    const router = useRouter();
    const [numIdentificacion, setNumIdentificacion] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handlerLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numIdentificacion, password }),
        });
        const data = await res.json();
        setIsLoading(false)
        if (data.success) {
            alert('Login exitoso');
            router.push('/dashboard'); // Redirigir a la ruta deseada
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="flex items-center justify-center p-5 ">
            <div className="p-2 w-1/5 0 flex flex-col">
                <div className="p-2 mb-2">
                    <h1 className="text-center text-3xl font-bold mb-2">Iniciar Sesión</h1>
                    <p>ingresa tus credenciales para acceder a tu cuenta.</p>
                </div>
                <form onSubmit={handlerLogin} className="flex flex-col gap-2">
                    <div className="flex flex-col bg-gray-800 p-1">
                        <label htmlFor="numIdentificacion" className="text-xs text-gray-300">Número de Identificación</label>
                        <input
                            type="text"
                            id="numIdentificacion"
                            value={numIdentificacion}
                            onChange={(e) => setNumIdentificacion(e.target.value)}
                            placeholder="Número de Identificación"
                            className="p-1 bg-transparent focus:outline-none text-white"
                        />
                    </div>
                    <div className="flex flex-col bg-gray-800 p-1">
                        <label htmlFor="password" className="text-xs text-gray-300">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            className="p-1 bg-transparent focus:outline-none text-white"
                        />
                    </div>
                    <button type="submit" className="p-2 bg-red-500 font-bold">{isLoading ? "Iniciando..." : "Iniciar Sesión"}</button>
                </form>
            </div>
            <div>
                <Image
                    src="/images/1.jpg"
                    alt="Slide 1"
                    width={700}
                    height={500}
                />
            </div>
        </div>
    );
}

export default Login;