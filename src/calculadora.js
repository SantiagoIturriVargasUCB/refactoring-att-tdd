export const calcularCadena = (cadena) => {
    if (cadena === "") return 0;

    let delimitador = /,|-/; 

    if (cadena.startsWith("//")) {
        const delimitadorMatch = cadena.match(/^\/\/(\[.+\])\s?/); 
        if (delimitadorMatch) {
            const delimitadores = delimitadorMatch[1]
                .match(/\[([^\]]+)\]/g) 
                .map(d => d.slice(1, -1));
            delimitador = new RegExp(
                delimitadores.map(escapeRegex).concat([",", "-"]).join("|")
            );
        }
        cadena = cadena.replace(/^\/\/(\[.+\])\s?/, ""); 
    }

    const numeros = cadena.split(delimitador).map(Number);
    return numeros.filter(n => n <= 1000).reduce((acc, curr) => acc + curr, 0);
};

const escapeRegex = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
