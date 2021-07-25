function Factorial (number){
    if (number==0){
        return 1;
    }
    else{
        return number*Factorial(number-1);
    }
}
var result= Factorial(5);
console.log("You factorial result is=",result);