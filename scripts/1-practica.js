const usuarioValido = 'ericfr';
const contraseniaValida = 'hola1234';

const usuario = prompt('Ingresa tu usuario.');
const contrasenia = prompt('Ingresa tu contraseña.');

const credencialesValidas = (usuario === usuarioValido) && (contrasenia === contraseniaValida);

if(credencialesValidas) {
    console.log('Bienvenidx de vuelta!');
} else {
    console.error('Credenciales invalidas!');
}