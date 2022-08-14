const print = (n) => {

    // Base condition
    if(n === 0){
        return; 
    }
    // Induction
    print(n-1);
    console.log(n);
}

print(10);