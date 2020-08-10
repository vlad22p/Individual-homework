for(var i = 1; i <= 20; i++) {
    console.log(i);
}

for(var i = 1; i <= 20; i++) {
    if(i % 2 !==0){
        console.log(i);
    }
}

var arr = [10, 23, 45, 7];
var s = 0;

for(var i = 0; i<arr.length; i++) {
    s = s + arr[i];
}
console.log(s);

var arr = [2, 48, 7, 9, 45, 93];
var max = 0;

for(var i = 0; i < arr.length; i++) {
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);

var arr = [1, 3, 12, 3, 55, 3, 3, 3, 78, 92, 91, 3, 3];
var counter = 0;

for(var i = 0; i < arr.length; i++) {
    if(arr[i] == 3) {
        counter++;
    }
}
console.log(counter);



