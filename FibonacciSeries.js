function FibonacciSeries(num){
    if(num==0){
        return 0;
    }
    if(num==1){
        return 1;
    }
    else{
        return FibonacciSeries(num-1)+FibonacciSeries(num-2);
    }
}
var result= FibonacciSeries(10);
console.log("Fibonakki Series is=", result);
