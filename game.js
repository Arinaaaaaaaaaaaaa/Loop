let a = Math.floor(Math.random() * 10);
console.log(a);
while(true){
    let n = prompt("Введіть число від 0 до 10");
    if(isNaN(n)) break;
    else if(n == a){
        alert("Ви перемогли");
        break;
    }
    else if(n > a){
        alert("Ваше число більше задуманого :(");
    }
    else{
        alert("Ваше число менше задуманого :(");
    }
}
alert("Game over")