function ArrayMax(numbers){
    var max= numbers[0];
    for(var i=0; i<numbers.length; i++){
        var element= numbers[i];
        if(element>max){
            max=element;
        }
    }
    return max;
}
numbers=[10,20,30,40,50,60,70,80,90,100,120,150]
result= ArrayMax(numbers);
console.log("Your Max Number is=",result);