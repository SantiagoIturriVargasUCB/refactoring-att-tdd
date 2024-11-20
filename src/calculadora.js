export const calcularCadena = cadena => {
    if (cadena === "") return 0;
    const numeros = cadena.split(/,|-/).map(Number);
    return numeros.reduce((acc, curr) => acc + curr, 0);
}