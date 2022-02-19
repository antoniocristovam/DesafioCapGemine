let degrais = '';
let valorReceber = 6; // Quantidade de degrais

for (numero = 1; numero <= valorReceber; numero++) {
    degrais = ' '.repeat(valorReceber - numero) + '*'.repeat(numero);
    console.log(degrais);
};


