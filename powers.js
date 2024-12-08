let n = prompt("Введіть степінь числа 2");
let x = 2;
if (isNaN(n)){
    alert("Це не число");
}
for(let i = 1; i <= n; i++){
    alert(`Два в степені ${i} дорівнює ${x}`);
    console.log(`Два в степені ${i} дорівнює ${x}`);
    x *= 2
}
