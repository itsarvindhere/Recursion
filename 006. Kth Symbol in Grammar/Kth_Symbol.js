/*
    TRACKING HOW IT WORKS

 Row 1      0 -> 1
 Row 2      0 1 -> 2
 Row 3      0 1 1 0 -> 4
 Row 4      0 1 1 0 1 0 0 1 -> 8
 Row 5      0 1 1 0 1 0 0 1 1 0 0 1 0 1 1 0 -> 16

    e.g. n = 4, k = 3

    First, base condition is checked. Not true. So move on.

    We see that mid = 2 ^ 2 = 4
    And since k <= mid, we will call kthSymbol(n-1,k)
   
   kthSymbol(4,3) -> called kthSymbol(3,3);
                            
   For kthSymbol(3,3), n = 3 so mid = 2 ^ 1 = 2
   Since k > mid, that means kthSymbol(n-1,k-mid) is called.
   
   kthSymbol(3,3) -> called kthSymbol(2,1)
   It will return complement of whatever kthSymbol(2,1) returned.

   In kthSymbol(2,1), n = 2 so mid = 2 ^ 0 = 1
   Since k <= mid so we call kthSymbol(n-1,k) 

   kthSymbol(2,1) -> called kthSymbol(1,1)

   Since base condition is reached now, kthSymbol(1,1) returns 0.

   because it returned 0, kthSymbol(2,1) returns 0 as well since we don't find complement in case k <= mid.

   Because kthSumbol(2,1) returned 0, kthSymbol(3,3) will return complement of it = 1

   And because kthSymbol(3,3) returned 1, kthSymbol(4,3) will also return 1 because k <= mid in that case.


   Hence, finally, we get 1 as output.

   So, the bit at 4th row and 3rd column is 1.

*/

const kthSymbol = (n,k) => {
    //Base Condition
    if(n == 1 && k == 1){
        return 0;
    }

    //Find the mid of length of the nth row
    let mid = Math.pow(2, n - 2);

    if(k <= mid){
        return kthSymbol(n-1,k);
    } else{
        let symbol = kthSymbol(n-1,k-mid);
        // Return the complement of the symbol since k > mid
        return symbol === 1 ? 0 : 1;
    }
}

let n = 2, k = 2;
console.log(kthSymbol(n,k));