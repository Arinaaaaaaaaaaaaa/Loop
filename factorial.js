let n = prompt("Введіть число");
if (isNaN(n)){
    alert("Це не число");
}
else{
    let a = 1;
    let i = 1;
    while(i <= n){
        a *= i;
        i++
    }
    alert(`Факторіал з числа ${n} дорівнює ${a}`)
}