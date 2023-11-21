
const encontrarNumeroMasGrande = (listaNumeros) => {

    if(listaNumeros.length === 0) {
        return null;
    }

    let numeroMasGrande = listaNumeros[0];

    for(let indice = 1; indice < listaNumeros.length; indice++) {

        if(listaNumeros[indice] > numeroMasGrande) {
            numeroMasGrande = listaNumeros[indice]
        }

    }

    return numeroMasGrande;
}

const mayor = encontrarNumeroMasGrande([]);

console.log(mayor);