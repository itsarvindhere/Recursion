const findKthBit = (n,k) => {
        //Base Condition
        if(n == 1){
            return '0';
        }
        
        let numberOfColumns = Math.pow(2,n) - 1;
        let mid = numberOfColumns/2;
                
        if(k <= mid){
            return findKthBit(n-1,k);
        } else if (k == mid + 1){
            return '1';
        } else {
           k = numberOfColumns - k + 1;
           let c = findKthBit(n-1,k);
           return c == '0' ? '1' : '0';
        }
}


console.log(findKthBit(3,5));