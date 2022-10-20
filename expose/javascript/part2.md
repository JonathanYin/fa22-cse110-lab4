# Part 2

1. 3; loops through each element (index 0 - 2), and then increments once more, before exiting loop
2. 150; last element is 300. 300 is multiplied by (1 - 0.5) to get 150, which is the last value that discountedPrice holds
3. 150; last element is 300. 300 is multiplied by (1 - 0.5) to get 150, which is rounded to stay at 150 as the last value of finalPrice
4. [50, 100, 150]; loop multiplies each input from [100, 200, 300] by 0.5, and adds to array discounted[]
5. Process exited with code 1; i is a let, so it has block scope, and is undefined outside of the function
6. Process exited with code 1; discountedPrice is a let, so it is undefined outside of the function
7. 150; finalPrice is a let declared outside of the for loop, so the print statement is within its block
8. [50, 100, 150]; the array is declared in the same block scope as the return statement
9. Process exited with code 1; i is not defined
10. 3; length is assigned to the length of the input array, which is 3
11. [50, 100, 150]; since discountedPrice is reassigned upon each loop iteration
12. 