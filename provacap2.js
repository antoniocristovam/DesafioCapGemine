const senha = 'A@cd12'; //Digite sua senha neste local!!

let verificador = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?])(?=.{6,}).+$"
)

if (verificador.test(senha)) {
    console.log('Sua senha é forte.');
} else {
    console.log('Senha fraca, por favor verifique novamente.');
}