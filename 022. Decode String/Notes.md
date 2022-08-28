# PROBLEM STATEMENT

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. 

e.g. s = 3[a]2[bc]

It means, "a" is repeated 3 times and "bc" is repeated 2 times

So we get "aaabcbc" as the encoded string.

# RECURSIVE APPROACH

Lets look at this problem by ignoring the numbers. 

So s = [a][bc]

This means to get the final string, we have to get whatever there is between the brackets. And add that to the final result. 

So that means, we should have a method such that it takes a string and returns whatever there is between the opening and closing brackets.

Now lets add back the numbers

 s = 3[a]2[bc]

We can figure out the numbers with ease. We just need to check if the current character is a digit or not. 

e.g. 3 is a digit so we add this digit to our current number (initially it will be 0);

So, the only place where we make a recursive call is when we encounter an opening bracket. Because only there, we want to get hold of the string between the opening and closing bracket.

If we get a closing bracket, that means we are done with finding the string between the brackets and so, we can simply return that string we found (number times).


# HYPOTHESIS

We have a method decodeString(s) which takes the input string and returns the decoded string., We also have the global variable pos. What is this pos? Well, this keeps track of the index from where we have to loop through the string.

Initially it 0.

 s = 3[a]2[bc]

 At 0th index we have 3. So number = 3;
 Now, at 1st index we have "[" which means a recursive call will be made on string inside this opening bracket.

 pos++;
 And we call decodeString(s)

The reason for pos++ is to make sure pos now points to the index after the opening bracket because that's from where our loop needs to start in new recursive call.
 So pos will become 2nd index which is after the index of "["


 Now, we again do the same thing but this time loop starts from pos = 2

 We get 'a' so since it is neither a digit, or "[" or "]" that means we simply add it to result of this call. 

 result += "a"
 And since pos is global, here it is incremented to 3.

 Next, we encounrer "]" which means we have got our string between the brackets so now, we can return from here.

 Hence, decodeString(s) & pos = 2 will give us "a" and pos = 3

 And since we alrady have the number, we can repeat "a" 3 times 
 before putting it in result of the first call. And reset number = 0.

 Next, post = 4. as the next iteration of loop begins.

 We have 2 so again we set number = 2;
 And the same thing repeats for [bc]


Finally, we will get our result as "aaabcbc"

# BASE CONDITION

The base condition is when we get a closing bracket because at that time we know we have got whatever string there is inside the brackets. 
 

