var Sentence="Iam a very hard working web developer";
var count=0;
for(var i=0; i<Sentence.length;i++){
    var element= Sentence[i];
    if(element==" "){
        count=count+1;
    }
}
//Any sentence last word no space so we add 1
result=count+1
console.log("your total count word is=",result);
