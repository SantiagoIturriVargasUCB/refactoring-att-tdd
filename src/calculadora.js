export const calcularCadena = cadena => {
    if (cadena === "") return 0;

    let delimitador = /,|-/; // delimitadores por defecto
    if (cadena.startsWith("//")) {
        const delimitadorMatch = cadena.match(/^\/\/(\[.+])\n/); // buscar delimitaroes personalizados
        if (delimitadorMatch) {
            const delimitadores = delimitadorMatch[1]
                .match(/\[([^\]]+)\]/g) // extraer delimitador entre []
                .map(d => d.replace(/[\[\]]/g, "")); // limpiar []
            delimitador = new RegExp(delimitadores.map(d => escapeRegex(d)).join("|")); // crear regex din
        }
        cadena = cadena.replace(/^\/\/(\[.+])\n/, ""); // remover header de delimitadores
    }

    const numeros = cadena.split(delimitador).map(Number);
    return numeros.filter(n => n <= 1000).reduce((acc, curr) => acc + curr, 0);
}

const escapeRegex = string => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}