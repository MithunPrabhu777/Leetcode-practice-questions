var getSum = function(a, b) {
    
    while (b != 0)
{
    // carry now contains common 
    //set bits of x and y
    let carry = a & b;  

    // Sum of bits of x and y where at 
    //least one of the bits is not set
    a = a ^ b; 

    // Carry is shifted by one so that adding
    // it to x gives the required sum
    b = carry << 1;
}
return a;
};

let a = 2, b = 3;
console.log(getSum(a,b));