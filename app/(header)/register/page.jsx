'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();
    const [numIdentificacion, setNumIdentificacion] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    // Función para registrar un usuario
    const handleRegister = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numIdentificacion, password, name, email, address, city, phone }),
        });
        const data = await res.json();
        if (data.success) {
            alert('Usuario registrado con éxito');
            router.push('/login'); // Redirigir al login cuando se crear el usuario
        } else {
            alert(data.message);
        }
    };

    return (
        <form onSubmit={handleRegister} className="flex flex-col gap-2 p-2 text-white">
            <input
                className="p-2 bg-gray-500"
                type="text"
                placeholder="Número de Identificación"
                value={numIdentificacion}
                onChange={(e) => setNumIdentificacion(e.target.value)}
            />
            <input
                className="p-2 bg-gray-500"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className="p-2 bg-gray-500"
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="p-2 bg-gray-500"
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="p-2 bg-gray-500"
                type="text"
                placeholder="Dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input
                className="p-2 bg-gray-500"
                type="text"
                placeholder="Ciudad"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <input
                className="p-2 bg-gray-500"
                type="tel"
                placeholder="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit" className="bg-red-400 p-2 text-white font-bold">Registrar</button>
        </form>
    );
}
