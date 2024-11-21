export const calcularCadena = (cadena) => {
    if (cadena === "") return 0;

    let delimitador = /,|-/; // Delimitadores por defecto

    if (cadena.startsWith("//")) {
        const delimitadorMatch = cadena.match(/^\/\/(\[.+\])\s?/); // Buscar delimitadores personalizados
        if (delimitadorMatch) {
            const delimitadores = delimitadorMatch[1]
                .match(/\[([^\]]+)\]/g) // Extraer cada delimitador entre []
                .map(d => d.slice(1, -1)); // Limpiar corchetes []
            // Combinar delimitadores personalizados con predeterminados
            delimitador = new RegExp(
                delimitadores.map(escapeRegex).concat([",", "-"]).join("|")
            );
        }
        cadena = cadena.replace(/^\/\/(\[.+\])\s?/, ""); // Remover encabezado
    }

    const numeros = cadena.split(delimitador).map(Number);
    return numeros.filter(n => n <= 1000).reduce((acc, curr) => acc + curr, 0);
};

const escapeRegex = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
