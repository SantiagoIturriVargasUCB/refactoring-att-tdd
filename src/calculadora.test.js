import { calcularCadena } from './calculadora';


test('cadena vacía retorna 0', () => {
    expect(calcularCadena("")).toBe(0);
});