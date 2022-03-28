const pesodapecaemgramas = 50;

if (pesodapecaemgramas >= 100){

console.log(pesodapecaemgramas + ' Peso suficiente para cadastrar');}

else {

console.log(pesodapecaemgramas + ' Peso insuficiente para cadastrar')}

listaDePecas = ['AAA', 'BBB', 'CC'];

if (listaDePecas.length > 10){

    console.log('A caixa não tem capacidade suficiente');
}
else{

    for (let index = 0; index < listaDePecas.length; index++){
        const pecaatual = listaDePecas[index];

        if (pecaatual.length < 3){

            console.log(pecaatual + ' A peça possui um nome com 3 caracteres ou menos');

        }
        else{
            console.log(pecaatual + ' A peça pode ser cadastrada');
        }
    }
}