/*
    The first argument is always N
    The second argument is the source from where we want to move the disks
    The third argument is the destination to which we want to move the disks
    The fourth argument is the helper pole

    The first second third arguments will get interchanged depending on from which pole we are moving and to which pole we are moving.

    e.g. if we are moving disk from pole 1 to pole 2 then source will be same i.e., 1 but destination pole will be the 2nd pole. So, third argument will be the 2 in that case and fourth will be the 3.

    But if we are moving disk from pole 1 to pole 3, then source will be 1 but destination pole will be 3. And fourth argument will be 2.

    And finally, if we move from pole 2 to pole 3,

    source = 2
    destination = 3
    helper = 1

    This is how we are calling the same method but with just different values for source, destination, and helper.
*/

let steps = 0;
const toh = (N, source, destination, helper) => {
    //Base Condition
    if(N === 1){
        console.log(`move disk ${N} from pole ${source} to pole ${destination}`);
        return ++steps;
    }

    //First Move all the disks from source to helper except the last. This means, this time, destination = helper pole
    toh(N-1, source, helper, destination);

    //Now, move the one rode that is left in source pole to destination
    console.log(`move disk ${N} from pole ${source} to pole ${destination}`);
    steps++;

    //Now, move back all the rodes from helper pole to destination pole. This means, source = helper here

    toh(N-1, helper, destination, source);
    return steps;
}


let N = 3;

console.log("Steps ->",toh(N,1,3,2));
