function myFunction () {
    var number1 = 1
    var number2 = 2
    return sum()
    
    function sum () {
        return number1 + number2
    }
}

function myFunction2 () {
    var number1 = 1
    var number2 = 2
    return sum()
    var number3 = 10
    function sum () {
        return number1 + number2 + number3
    }
}

console.log(myFunction())
console.log(myFunction2())
if(number4 == undefined) {
    
}