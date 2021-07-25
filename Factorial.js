function Factorial(number){
    var result =1;
    for(var i=1 ; i<=number ; i++){
        result=result*i;
    }
    return result;
}
console.log("Factorial Result is =", Factorial(5));