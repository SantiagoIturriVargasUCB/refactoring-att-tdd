import { calcularCadena } from "./src/calculadora";

document.getElementById('btn-calcular').addEventListener('click', () => {

    const cadena = document.getElementById('input-cadena').value;
    try {
        const resultado = calcularCadena(cadena);
        document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
    } catch (error) {
        document.getElementById('resultado').innerText = `Error: ${error.message}`;
    }
});