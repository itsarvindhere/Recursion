/*

    Factorial of 5 = 5 x 4 x 3 x 2 x 1

    So what if we can define a method such that if we pass a number N to it, it will give us N x n-1 x n-2..... x 1

    e.g. factorial(n)

    If we can define such method, then that means factorial(n-1) will give us n-1 x n-2 x..... x 1

    So, since factorial(n-1) will calculate the factorial of n-1, all that is left is multiply n to it to get factorial of n.

    And that is why we write n * factorial(n-1)

    In factorial, we know that factorial of 0 or 1 is 1 and that is the smallest valid input. So, as soon as we reach 0 or 1, we return from there. So that will be the base condition.

*/


/*

    Lets take n = 5
    factorial(5) will return 5 * factorial(4)

    So, now we need to find what factorial(4) is

    factorial(4) will return 4 * factorial(3)

    So, now we need to find what factorial(3) is

    factorial(3) will return 3 * factorial(2)

    So, now we need to find what factorial(2) is   
              
    factorial(2) will return 2 * factorial(1) 
    
    In factorial(1), it will check if condition and it is true. So, we return 1 and the factorial(1) finishes executing.

    Since factorial(1) returned 1, that means factorial(2) evaluates to ->
        2 * factorial(1)
      = 2 * 1
      = 2
    Since factorial(2) is 2, factorial(3) evaluates to ->
        3 * factorial(2)
      = 3 * 2
      = 6

    Since factorial(3) is 6, factorial(4) evaluates to ->
        4 * factorial(3)
      = 4 * 6
      = 24

    And finally, since factorial(4)= 24, factorial(5) evaluates to ->
        5 * factorial(4)
      = 5 * 24
      = 120

    And so, factorial(5) finishes executing and we get 120 as the returned output.


*/

const factorial = (n) => {
    //Base Condition
    if(n === 1){
        return 1;
    }
    return n * factorial(n - 1);
}


console.log("Factorial of 5 is -> ", factorial(5));