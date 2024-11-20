import { calcularCadena } from './calculadora';


describe('Pruebas en calcular cadena', () => {
    test('cadena con un número retorna ese número', () => {
        expect(calcularCadena("2")).toBe(2);
    });

    test('cadena con dos números separados por coma retorna su suma', () => {
        expect(calcularCadena("1,2")).toBe(3);
    });

    test('cadena con delimitador definido por el usuario retorna la suma', () => {
        expect(calcularCadena("//[;]\n6;3")).toBe(9);
    });
})