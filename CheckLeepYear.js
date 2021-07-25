function CheckLeapyear(year){
    if((year%4==0) && (year%100!==0) || (year%400==0)){
        return true;
    }
    else{
        return false;
    }
}
Result= CheckLeapyear(2020);
console.log("Your input year is Leepyear =", Result);