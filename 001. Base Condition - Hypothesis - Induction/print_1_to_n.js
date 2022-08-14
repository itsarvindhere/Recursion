const print = (n) => {

    // Base condition
    if(n === 0){
        return; 
    }
    print(n-1); // Recursive Call
    console.log(n);
}

print(10);