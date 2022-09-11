//Recursive Method
const solve = (arr, k, start) =>{
    //Base Condition
    //If array length is 1, it means we got our safe position
    if(arr.length == 1) return arr[0]

    //Kill the start + kth person
    personToKill = (start + k) % arr.length

    //Remove that person from the array
    arr.splice(personToKill, 1)
    
    return solve(arr, k, personToKill)
}



let n = 40, k = 7

//Create an array of length n filled with values from 1 to n
let arr = []
for (let i = 0; i < n; i++) arr[i] = i + 1

//Since array is 0-indexed, kth position means k-1th position
k -= 1

//The index from which the game starts
start = 0

//Get the safe position
safePosition = solve(arr, k, start)

console.log("Safe Position is -> ",safePosition)