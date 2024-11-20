export const calcularCadena = cadena => {
    if (cadena === "") return 0;

    let delimitador = /,|-/;
    if (cadena.startsWith("//")) {
        const match = cadena.match(/^\/\/\[(.+)]\n/);
        delimitador = new RegExp(match[1].replace(/[\[\]]/g, ""));
        cadena = cadena.replace(/^\/\/\[(.+)]\n/, "");
    }

    const numeros = cadena.split(delimitador).map(Number);
    return numeros.filter(n => n <= 1000).reduce((acc, curr) => acc + curr, 0);
}