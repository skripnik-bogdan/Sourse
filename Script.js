"strict mode";
//alert(1);
//console.log("Hello");

//var arr = ["Первое значение", "Второе значение"];
//console.log(arr);

/* Функция поиска простых чисел */

var box = [];
function  isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

for (var i = 0; i < 100; i++) {
    if ( isPrime(i) ) box[i]=i;
}
console.log(box);