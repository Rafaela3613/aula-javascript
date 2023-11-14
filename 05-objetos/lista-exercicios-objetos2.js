class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
       return this.peso / (this.altura * this.altura)
    }
    classificarImc(){

        const imc = this.calcularImc();
        
        if(imc < 18.5){
            return ('Abaixo do peso');
        }
        else if(imc  >=18.5 && imc <=25){
            return ('peso normal');
        }
        else if(imc  >=25 && imc <=30){
            return ('Acima do peso');
        }
        else if(imc >=30 && imc <=40){
            return ('Obeso');
        }
        else{
            return ('Obesidade grave');
    }
    }
}


    const rafaela = new Pessoa('Rafaela',73 , 1.67);
        console.log(rafaela.classificarImc());

    const joao = new Pessoa('Joao',108, 2.00);
        console.log(joao.classificarImc());
