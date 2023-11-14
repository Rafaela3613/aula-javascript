class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }    
}

const uno = new Carro('fiat','Prata',1/12);
console.log(uno.calcularGastoDePercurso(70, 5));
const palio = new Carro('fiat','Preto',1/10);
console.log(uno.calcularGastoDePercurso(70, 5));