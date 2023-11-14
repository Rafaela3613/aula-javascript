/* Faca um programa para calcular o valor e uma viagem.

Voce tera 3 variaveis. Sendo elas:
1 - Preco do combustivel,
2 -Gasto medio de combustivel do carro por km,
3 - Distancia em km da viagem.

*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 2000;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const totalGasto = litrosConsumidos * precoCombustivel;

    console.log(totalGasto.toFixed(2));
