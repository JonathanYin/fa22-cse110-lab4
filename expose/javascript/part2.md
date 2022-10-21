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
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. A. '32'; integer 2 is mapped to string representation
    B. 1; string 3 is taken as integer
    C. 3; null is taken as 0
    D. '3null'; null is mapped to string representation
    E. 4; true is taken as 1 in numeric conversion
    F. 0; both are converted to 0 in numeric conversion
    G. '3undefined'; undefined is mapped to string representation
    H. NaN; undefined becomes NaN in numeric conversion
14. A. true; '2' becomes a numeric 2
    B. false; compares first character of each, with '2' > '1'
    C. true; string '2' is converted to numeric 2
    D. false; strict equality operator checks without type conversion
    E. false; true has a numeric value of 1
    F. true; Boolean() function with input 2 is equivalent to true
15. == is an equality test, whereas === is a strict equality test, which checks equality without type conversion
    For example, === will return false immediately with inputs of different types
