import { users } from '../users';
import { serialize } from 'cookie';

export async function POST(req) {
    const body = await req.json();
    const { numIdentificacion, password } = body;

    const user = users.find(
        (user) => user.numIdentificacion === numIdentificacion && user.password === password
    );

    if (user) {
        const sessionCookie = serialize('session', JSON.stringify({ token: 'session-token', user }), {
            httpOnly: false, // Lo pongo en false para que sea accesisble desde el cliente
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600, // 1 hora
            path: '/',
        });


        return new Response(
            JSON.stringify({ success: true, message: 'Login exitoso' }),
            {
                status: 200,
                headers: {
                    'Set-Cookie': sessionCookie,
                    'Content-Type': 'application/json',
                }
            }
        );
    } else {
        return new Response(
            JSON.stringify({ success: false, message: 'Credenciales incorrectas' }),
            { status: 401 }
        );
    }
}
