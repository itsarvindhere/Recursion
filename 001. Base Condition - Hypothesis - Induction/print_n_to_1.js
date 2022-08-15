const print = (n) => {

    // Base condition
    if(n === 0){
        return; 
    }
    console.log(n);
    print(n-1); // Recursive Call
}

print(10);