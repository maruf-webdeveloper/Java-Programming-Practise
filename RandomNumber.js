function RandomNumber(){
    var temp= Math.random()*10;
    return Math.round(temp);
}
var final= RandomNumber();
console.log("Random Number start=",final);
