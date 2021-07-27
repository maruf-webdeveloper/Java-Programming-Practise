function ArraySum(numbers){
    var sum=0;
    for(var i=0; i<numbers.length;i++){
        var element=numbers[i];
        sum=numbers[i]+sum;
    }
    return sum;
}
var numbers=[10,20,30,40];
var result=ArraySum(numbers);
console.log("Total Sum is=",result);