
/*const peso = 73.9;
const altura = 1.67;

const imc = peso / (altura * altura);
 console.log(imc);

if(imc < 18.5){
    console.log('Abaixo do peso');
}
else if(imc  >=18.5 && imc <=25){
    console.log('peso normal');
}
else if(imc  >=25 && imc <=30){
    console.log('Acima do peso');
}
else if(imc >=30 && imc <=40){
    console.log('Obeso');
}
else{
    console.log('Obesidade grave');
}
*/

const peso = 173.9;
const altura = 1.67;

const imc = peso / (Math.pow(altura,2));
console.log(imc);
if(imc < 18.5){
    console.log('Abaixo do peso');
}
else if(imc  >=18.5 && imc <=25){
    console.log('peso normal');
}
else if(imc  >=25 && imc <=30){
    console.log('Acima do peso');
}
else if(imc >=30 && imc <=40){
    console.log('Obeso');
}
else{
    console.log('Obesidade grave');
}
