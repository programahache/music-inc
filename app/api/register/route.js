import { users } from '../users';

export async function POST(req) {
  const body = await req.json();
  const { numIdentificacion, password, name, email, address, city, phone } = body;

  // Aqui estoy validando los campos del formulario
  if (
    !numIdentificacion ||
    !password ||
    !name ||
    !email ||
    !address ||
    numIdentificacion.length > 15 ||
    password.length > 20 ||
    name.length > 50 ||
    email.length > 50 ||
    address.length > 300 ||
    (city && city.length > 20) ||
    (phone && phone.length > 20) ||
    !email.includes('@')
  ) {
    return new Response(
      JSON.stringify({ success: false, message: 'Datos inválidos o incompletos' }),
      { status: 400 }
    );
  }

  // Verifico si el usuario existe
  const userExists = users.find((user) => user.numIdentificacion === numIdentificacion);
  if (userExists) {
    return new Response(
      JSON.stringify({ success: false, message: 'Usuario ya existe' }),
      { status: 409 }
    );
  }

  // Alameceno los datos en la variable users
  users.push({
    numIdentificacion,
    password,
    name,
    email,
    address,
    city,
    phone,
  });

  return new Response(
    JSON.stringify({ success: true, message: 'Usuario registrado con éxito' }),
    { status: 200 }
  );
}
