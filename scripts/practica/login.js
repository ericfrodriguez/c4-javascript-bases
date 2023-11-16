

const usuarioInput = prompt('Ingresa tu usuario.');
const contraseniaInput = prompt('Ingresa tu contraseña.');

const iniciarSesion = (usuario, contrasenia) => {
    const usuarioValido = 'ericfr';
    const contraseniaValida = 'hola1234';

    const credencialesValidas = (usuario === usuarioValido) && (contrasenia === contraseniaValida);

    const mensaje = credencialesValidas
        ? 'Inicio de sesión exitoso'
        : 'Credenciales incorrectas'

    return mensaje;
}

const resultado = iniciarSesion(usuarioInput, contraseniaInput);

console.log(resultado);