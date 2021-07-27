var numbers=[1,1,2,5,7,3,5,2,7,9,5,4];
var UniqueNumbers=[];
for(var i=0; i<numbers.length;i++){
    var element=numbers[i];
    var index= UniqueNumbers.indexOf(element);
    if(index == -1){
        UniqueNumbers.push(element);
    }
}
console.log("Your result is=",UniqueNumbers);